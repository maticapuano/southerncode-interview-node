import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateReviews1691267071681 implements MigrationInterface {
  private table = "reviews";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: this.table,
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true,
          generationStrategy: "uuid",
          default: "uuid_generate_v4()",
        },
        {
          name: "movie_id",
          type: "uuid",
          isNullable: false,
        },
        {
          name: "user_name",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "rating",
          type: "int",
          isNullable: false,
        },
        {
          name: "created_at",
          type: "timestamp",
          default: "now()",
        },
      ],
      foreignKeys: [
        {
          name: "FK_movie_id",
          referencedTableName: "movies",
          referencedColumnNames: ["id"],
          columnNames: ["movie_id"],
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
      ],
      indices: [
        {
          name: "IDX_user_name",
          columnNames: ["user_name"],
        },
      ],
      uniques: [
        {
          name: "UNIQUE_user_name_movie_id",
          columnNames: ["user_name", "movie_id"],
        },
      ],
      checks: [
        {
          name: "CHK_rating",
          expression: `"rating" >= 1 AND "rating" <= 10`,
        },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
