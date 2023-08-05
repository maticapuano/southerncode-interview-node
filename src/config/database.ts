import env from "env-var";
import { join } from "path";

export class DatabaseConfig {
  public static get hostname(): string {
    return env.get("DATABASE_HOSTNAME").required().asString();
  }

  public static get username(): string {
    return env.get("DATABASE_USERNAME").required().asString();
  }

  public static get password(): string {
    return env.get("DATABASE_PASSWORD").required().asString();
  }

  public static get database(): string {
    return env.get("DATABASE_NAME").required().asString();
  }

  public static get port(): number {
    const defaultPort = 5432;

    return env.get("DATABASE_PORT").default(defaultPort).asPortNumber();
  }

  public static get logging(): boolean {
    return env.get("DATABASE_LOGGING").default("false").asBool();
  }

  public static get entityPath(): string {
    const path =
      "dist/modules/**/infrastructure/persistence/{{orm}}/entities/*.entity.js";

    return join(process.cwd(), path);
  }

  public static get migrationsPath(): string {
    const path = `dist/shared/infrastructure/persistence/{{orm}}/migrations/*.js`;

    return join(process.cwd(), path);
  }
}
