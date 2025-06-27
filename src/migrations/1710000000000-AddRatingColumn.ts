import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRatingColumn1710000000000 implements MigrationInterface {
    name = 'AddRatingColumn1710000000000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Проверяем, существует ли колонка
        const table = await queryRunner.getTable("recipes");
        const ratingColumn = table?.findColumnByName("rating");
        
        if (!ratingColumn) {
            // Добавляем колонку как nullable
            await queryRunner.query(`ALTER TABLE "recipes" ADD "rating" numeric(3,1)`);
            
            // Заполняем существующие записи значением по умолчанию
            await queryRunner.query(`UPDATE "recipes" SET "rating" = 0.0 WHERE "rating" IS NULL`);
            
            // Делаем колонку NOT NULL
            await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "rating" SET NOT NULL`);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("recipes");
        const ratingColumn = table?.findColumnByName("rating");
        
        if (ratingColumn) {
            await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "rating"`);
        }
    }
} 