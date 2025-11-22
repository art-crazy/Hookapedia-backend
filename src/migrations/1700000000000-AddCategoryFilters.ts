import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCategoryFilters1700000000000 implements MigrationInterface {
  name = 'AddCategoryFilters1700000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "recipes"
      ADD COLUMN "flavorCategory" character varying,
      ADD COLUMN "mintCategory" character varying,
      ADD COLUMN "coolingCategory" character varying,
      ADD COLUMN "strengthCategory" character varying
    `);

    await queryRunner.query(`
      CREATE INDEX "IDX_recipe_flavorCategory" ON "recipes" ("flavorCategory")
    `);

    await queryRunner.query(`
      CREATE INDEX "IDX_recipe_mintCategory" ON "recipes" ("mintCategory")
    `);

    await queryRunner.query(`
      CREATE INDEX "IDX_recipe_coolingCategory" ON "recipes" ("coolingCategory")
    `);

    await queryRunner.query(`
      CREATE INDEX "IDX_recipe_strengthCategory" ON "recipes" ("strengthCategory")
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "IDX_recipe_strengthCategory"`);
    await queryRunner.query(`DROP INDEX "IDX_recipe_coolingCategory"`);
    await queryRunner.query(`DROP INDEX "IDX_recipe_mintCategory"`);
    await queryRunner.query(`DROP INDEX "IDX_recipe_flavorCategory"`);

    await queryRunner.query(`
      ALTER TABLE "recipes"
      DROP COLUMN "strengthCategory",
      DROP COLUMN "coolingCategory",
      DROP COLUMN "mintCategory",
      DROP COLUMN "flavorCategory"
    `);
  }
}
