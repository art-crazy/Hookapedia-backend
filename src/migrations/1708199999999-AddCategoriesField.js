class AddCategoriesField1708199999999 {
  async up(queryRunner) {
    // Добавляем поле как nullable
    await queryRunner.query(`ALTER TABLE "recipes" ADD "categories" text NULL`);

    // Обновляем существующие записи, устанавливая пустой массив
    await queryRunner.query(`UPDATE "recipes" SET "categories" = '{}' WHERE "categories" IS NULL`);

    // Делаем поле NOT NULL
    await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "categories" SET NOT NULL`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "categories"`);
  }
}

module.exports = AddCategoriesField1708199999999;
