import { TMDBLanguage } from "@/modules/movies/domain/enums/tmdb-language";
import env from "env-var";

export class TMDBConfig {
  public static get apiKey(): string {
    return env.get("TMDB_API_KEY").required().asString();
  }

  public static get language(): TMDBLanguage {
    const languages = Object.values(TMDBLanguage);

    return env
      .get("TMDB_DEFAULT_LANGUAGE")
      .required()
      .default(TMDBLanguage.EN)
      .asEnum(languages);
  }
}
