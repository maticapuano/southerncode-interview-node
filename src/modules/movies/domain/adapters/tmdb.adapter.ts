import { Nullable } from "@/shared/domain/contracts/nullable";
import { TMDBMovie } from "../contracts/tmdb-movie";

export abstract class TMDBAdapter {
  public abstract getMovieById(id: number): Promise<Nullable<TMDBMovie>>;
}
