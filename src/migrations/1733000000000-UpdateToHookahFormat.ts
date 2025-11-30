import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateToHookahFormat1733000000000 implements MigrationInterface {
  name = 'UpdateToHookahFormat1733000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Remove old food-related columns
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN IF EXISTS "cookTime"`);
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN IF EXISTS "nutrition"`);
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN IF EXISTS "cuisine"`);
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN IF EXISTS "servings"`);
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN IF EXISTS "categories"`);
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN IF EXISTS "createdAt"`);

    // Add new hookah-specific columns
    await queryRunner.query(`ALTER TABLE "recipes" ADD "preparationTime" character varying NOT NULL DEFAULT '10-15 минут'`);
    await queryRunner.query(`ALTER TABLE "recipes" ADD "smokingDuration" character varying NOT NULL DEFAULT '45-60 минут'`);
    await queryRunner.query(`ALTER TABLE "recipes" ADD "recipeType" character varying NOT NULL DEFAULT 'Фруктовый'`);
    await queryRunner.query(`ALTER TABLE "recipes" ADD "persons" integer NOT NULL DEFAULT '1'`);
    await queryRunner.query(`ALTER TABLE "recipes" ADD "bowlType" character varying NOT NULL DEFAULT 'Phunnel'`);
    await queryRunner.query(`ALTER TABLE "recipes" ADD "packingMethod" character varying NOT NULL DEFAULT 'Воздушная'`);
    await queryRunner.query(`ALTER TABLE "recipes" ADD "charcoal" jsonb NOT NULL DEFAULT '{"type":"Кокосовый","pieces":3,"size":"25мм куб"}'`);
    await queryRunner.query(`ALTER TABLE "recipes" ADD "smokeLevel" character varying NOT NULL DEFAULT 'Средний'`);
    await queryRunner.query(`ALTER TABLE "recipes" ADD "tags" text NOT NULL DEFAULT ''`);
    await queryRunner.query(`ALTER TABLE "recipes" ADD "tips" text`);
    await queryRunner.query(`ALTER TABLE "recipes" ADD "likes" integer NOT NULL DEFAULT '0'`);

    // Create index on tags for search performance
    await queryRunner.query(`CREATE INDEX "IDX_RECIPE_TAGS" ON "recipes" ("tags")`);

    // Update difficulty column to use new format
    await queryRunner.query(`
      UPDATE "recipes"
      SET "difficulty" = CASE
        WHEN "difficulty" = '1/5' OR "difficulty" = '2/5' THEN 'Легко'
        WHEN "difficulty" = '3/5' THEN 'Средне'
        WHEN "difficulty" = '4/5' OR "difficulty" = '5/5' THEN 'Сложно'
        ELSE 'Средне'
      END
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove hookah-specific columns
    await queryRunner.query(`DROP INDEX IF EXISTS "IDX_RECIPE_TAGS"`);
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "likes"`);
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "tips"`);
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "tags"`);
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "smokeLevel"`);
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "charcoal"`);
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "packingMethod"`);
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "bowlType"`);
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "persons"`);
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "recipeType"`);
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "smokingDuration"`);
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "preparationTime"`);

    // Restore old food-related columns
    await queryRunner.query(`ALTER TABLE "recipes" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    await queryRunner.query(`ALTER TABLE "recipes" ADD "categories" text NOT NULL DEFAULT ''`);
    await queryRunner.query(`ALTER TABLE "recipes" ADD "servings" integer NOT NULL DEFAULT '1'`);
    await queryRunner.query(`ALTER TABLE "recipes" ADD "cuisine" character varying NOT NULL DEFAULT ''`);
    await queryRunner.query(`ALTER TABLE "recipes" ADD "nutrition" jsonb NOT NULL DEFAULT '{}'`);
    await queryRunner.query(`ALTER TABLE "recipes" ADD "cookTime" character varying NOT NULL DEFAULT ''`);
  }
}
