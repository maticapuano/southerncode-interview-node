import { DatabaseConfig } from "@/config/database";
import { DataSource, DataSourceOptions } from "typeorm";

export class TypeormClientFactory {
  public static create(): DataSource {
    const entities = DatabaseConfig.entityPath.replace("{{orm}}", "typeorm");
    const migrations = DatabaseConfig.migrationsPath.replace(
      "{{orm}}",
      "typeorm",
    );

    const options: DataSourceOptions = {
      type: "postgres",
      host: DatabaseConfig.hostname,
      port: DatabaseConfig.port,
      username: DatabaseConfig.username,
      password: DatabaseConfig.password,
      database: DatabaseConfig.database,
      entities: [entities],
      migrations: [migrations],
      migrationsRun: true,
      logging: DatabaseConfig.logging,
      useUTC: true,
    };

    return new DataSource(options);
  }
}
