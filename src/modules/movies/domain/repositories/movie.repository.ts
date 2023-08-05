import { Nullable } from "@/shared/domain/contracts/nullable";
import { CreateMovie, Movie } from "../contracts/movie";

export abstract class MovieRepository {
  public abstract findByExternalId(
    externalId: string,
  ): Promise<Nullable<Movie>>;
  public abstract findByExternalIdWithReviews(
    externalId: string,
  ): Promise<Nullable<Movie>>;
  public abstract create(movie: CreateMovie): Promise<Movie>;
}
