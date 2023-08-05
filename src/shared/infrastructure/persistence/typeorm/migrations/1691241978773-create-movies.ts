import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMovies1691241978773 implements MigrationInterface {
  private table = "movies";

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
          name: "external_id",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "title",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "release_date",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "poster",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "overview",
          type: "text",
          isNullable: false,
        },
      ],
      checks: [
        {
          name: `check_${this.table}_release_date`,
          expression: `release_date ~ '^[0-9]{4}-[0-9]{2}-[0-9]{2}$'`,
        },
      ],
      indices: [
        {
          name: `idx_${this.table}_release_date`,
          columnNames: ["release_date"],
        },
      ],
      uniques: [
        {
          name: `unique_${this.table}_external_id`,
          columnNames: ["external_id"],
        },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
