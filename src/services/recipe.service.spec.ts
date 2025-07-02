import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecipeService } from './recipe.service';
import { Recipe } from '../entities/recipe.entity';

describe('RecipeService', () => {
  let service: RecipeService;
  let repository: Repository<Recipe>;

  const mockRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
    createQueryBuilder: jest.fn(() => ({
      leftJoinAndSelect: jest.fn().mockReturnThis(),
      andWhere: jest.fn().mockReturnThis(),
      skip: jest.fn().mockReturnThis(),
      take: jest.fn().mockReturnThis(),
      getManyAndCount: jest.fn().mockResolvedValue([[], 0]),
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RecipeService,
        {
          provide: getRepositoryToken(Recipe),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<RecipeService>(RecipeService);
    repository = module.get<Repository<Recipe>>(getRepositoryToken(Recipe));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return paginated recipes', async () => {
      const mockRecipes = [
        { id: 1, name: 'Test Recipe', description: 'Test Description' },
        { id: 2, name: 'Another Recipe', description: 'Another Description' },
      ];
      
      const mockQueryBuilder = {
        leftJoinAndSelect: jest.fn().mockReturnThis(),
        andWhere: jest.fn().mockReturnThis(),
        skip: jest.fn().mockReturnThis(),
        take: jest.fn().mockReturnThis(),
        getManyAndCount: jest.fn().mockResolvedValue([mockRecipes, 2]),
      };
      
      mockRepository.createQueryBuilder.mockReturnValue(mockQueryBuilder);
      
      const result = await service.findAll(1, 12);
      
      expect(result).toEqual({
        recipes: mockRecipes,
        total: 2,
        totalPages: 1
      });
      expect(mockRepository.createQueryBuilder).toHaveBeenCalledWith('recipe');
    });
  });

  describe('findOne', () => {
    it('should return a single recipe', async () => {
      const mockRecipe = { id: 1, name: 'Test Recipe', description: 'Test Description' };
      
      mockRepository.findOne.mockResolvedValue(mockRecipe);
      
      const result = await service.findOne(1);
      
      expect(result).toEqual(mockRecipe);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });
  });
});
