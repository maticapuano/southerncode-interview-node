import { Environment } from "@/shared/domain/enums/environment";
import env from "env-var";

export class AppConfig {
  public static get port(): number {
    return env.get("PORT").default(3000).required().asPortNumber();
  }

  public static get environment(): Environment {
    const environments = Object.values(Environment);

    return env
      .get("NODE_ENV")
      .default(Environment.DEVELOPMENT)
      .required()
      .asEnum(environments);
  }

  public static get isDevelopment(): boolean {
    return this.environment === Environment.DEVELOPMENT;
  }

  public static get isProduction(): boolean {
    return this.environment === Environment.PRODUCTION;
  }

  public static get corsAllowedOrigins(): string[] {
    return env.get("CORS_ALLOWED_ORIGINS").default("*").required().asArray();
  }

  public static get defaultApiVersion(): string {
    return env
      .get("DEFAULT_API_VERSION")
      .default("1")
      .asIntPositive()
      .toString();
  }
}
