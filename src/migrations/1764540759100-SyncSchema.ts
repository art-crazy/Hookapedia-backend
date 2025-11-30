import { MigrationInterface, QueryRunner } from "typeorm";

export class SyncSchema1764540759100 implements MigrationInterface {
    name = 'SyncSchema1764540759100'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Clear existing data to avoid NOT NULL violations when adding new columns
        await queryRunner.query(`DELETE FROM "recipes"`);

        await queryRunner.query(`DROP INDEX "public"."IDX_RECIPE_TAGS"`);
        await queryRunner.query(`CREATE TABLE "step" ("id" SERIAL NOT NULL, "order" integer NOT NULL, "description" text NOT NULL, "image" character varying, "recipeId" integer, CONSTRAINT "PK_70d386ace569c3d265e05db0cc7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ingredient" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "amount" character varying NOT NULL, "unit" character varying, "recipeId" integer, CONSTRAINT "PK_6f1e945604a0b59f56a57570e98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "collection" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying, "image" character varying, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_ad3f485bbc99d875491f44d7c85" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "collection_recipes_recipes" ("collectionId" integer NOT NULL, "recipesId" integer NOT NULL, CONSTRAINT "PK_a791ab12033877483ff836412ce" PRIMARY KEY ("collectionId", "recipesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bd010bbf495a3d3dd689ad51f6" ON "collection_recipes_recipes" ("collectionId") `);
        await queryRunner.query(`CREATE INDEX "IDX_60a4732fd3a891439880420dee" ON "collection_recipes_recipes" ("recipesId") `);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "imageUrl"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "strength"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "author"`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD CONSTRAINT "UQ_dcf93c3e497af5c56bc8312be80" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "steps" jsonb NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "imageMain" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "flavorCategory" character varying`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "mintCategory" character varying`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "coolingCategory" character varying`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "strengthCategory" character varying`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "rating" numeric(3,1) NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "reviews" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP CONSTRAINT "PK_8f09680a51bf3669c1598a21682"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD CONSTRAINT "PK_8f09680a51bf3669c1598a21682" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "preparationTime" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "smokingDuration" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "difficulty" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "recipeType" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "ingredients" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "bowlType" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "packingMethod" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "charcoal" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "smokeLevel" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "tags" SET NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_dcf93c3e497af5c56bc8312be8" ON "recipes" ("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_f65301a12c91c9dad0c2cf3fbe" ON "recipes" ("flavorCategory") `);
        await queryRunner.query(`CREATE INDEX "IDX_71b29138e0c4cd8f2e364e757f" ON "recipes" ("mintCategory") `);
        await queryRunner.query(`CREATE INDEX "IDX_b26646367aa397ee352f6f6c1b" ON "recipes" ("coolingCategory") `);
        await queryRunner.query(`CREATE INDEX "IDX_3cc9a3155f70ad81621da1cd80" ON "recipes" ("strengthCategory") `);
        await queryRunner.query(`ALTER TABLE "step" ADD CONSTRAINT "FK_e50600a62b8ece3b996d58331f4" FOREIGN KEY ("recipeId") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ingredient" ADD CONSTRAINT "FK_a19a4b507b9e2d1efd2d73b37bc" FOREIGN KEY ("recipeId") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "collection_recipes_recipes" ADD CONSTRAINT "FK_bd010bbf495a3d3dd689ad51f65" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "collection_recipes_recipes" ADD CONSTRAINT "FK_60a4732fd3a891439880420deed" FOREIGN KEY ("recipesId") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Clear existing data to avoid NOT NULL violations when reverting columns
        await queryRunner.query(`DELETE FROM "recipes"`);

        await queryRunner.query(`ALTER TABLE "collection_recipes_recipes" DROP CONSTRAINT "FK_60a4732fd3a891439880420deed"`);
        await queryRunner.query(`ALTER TABLE "collection_recipes_recipes" DROP CONSTRAINT "FK_bd010bbf495a3d3dd689ad51f65"`);
        await queryRunner.query(`ALTER TABLE "ingredient" DROP CONSTRAINT "FK_a19a4b507b9e2d1efd2d73b37bc"`);
        await queryRunner.query(`ALTER TABLE "step" DROP CONSTRAINT "FK_e50600a62b8ece3b996d58331f4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3cc9a3155f70ad81621da1cd80"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b26646367aa397ee352f6f6c1b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_71b29138e0c4cd8f2e364e757f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f65301a12c91c9dad0c2cf3fbe"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_dcf93c3e497af5c56bc8312be8"`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "tags" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "smokeLevel" SET DEFAULT 'Средний'`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "charcoal" SET DEFAULT '{"size": "25мм куб", "type": "Кокосовый", "pieces": 3}'`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "packingMethod" SET DEFAULT 'Воздушная'`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "bowlType" SET DEFAULT 'Phunnel'`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "ingredients" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "recipeType" SET DEFAULT 'Фруктовый'`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "difficulty" SET DEFAULT 'Средне'`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "smokingDuration" SET DEFAULT '45-60 минут'`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "preparationTime" SET DEFAULT '10-15 минут'`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP CONSTRAINT "PK_8f09680a51bf3669c1598a21682"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD CONSTRAINT "PK_8f09680a51bf3669c1598a21682" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "reviews"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "strengthCategory"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "coolingCategory"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "mintCategory"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "flavorCategory"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "imageMain"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "steps"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP CONSTRAINT "UQ_dcf93c3e497af5c56bc8312be80"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "author" character varying`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "strength" integer`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "imageUrl" character varying`);
        await queryRunner.query(`DROP INDEX "public"."IDX_60a4732fd3a891439880420dee"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bd010bbf495a3d3dd689ad51f6"`);
        await queryRunner.query(`DROP TABLE "collection_recipes_recipes"`);
        await queryRunner.query(`DROP TABLE "collection"`);
        await queryRunner.query(`DROP TABLE "ingredient"`);
        await queryRunner.query(`DROP TABLE "step"`);
        await queryRunner.query(`CREATE INDEX "IDX_RECIPE_TAGS" ON "recipes" ("tags") `);
    }

}
