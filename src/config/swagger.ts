import env from "env-var";

export class SwaggerConfig {
  public static get enabled(): boolean {
    return env.get("SWAGGER_ENABLED").default("true").asBool();
  }
}
