import { Injectable } from "@nestjs/common";
import { Movie } from "../domain/contracts/movie";
import { MovieNotFound } from "../domain/exceptions/movie-not-found";
import { MovieRepository } from "../domain/repositories/movie.repository";
import { GetMovieByExternalIdUseCase } from "./get-movie.use-case";

@Injectable()
export class GetMovieReviewsUseCase {
  public constructor(
    private movieRepository: MovieRepository,
    private getMovieByExternalIdUseCase: GetMovieByExternalIdUseCase,
  ) {}

  public async execute(movieId: string): Promise<Movie> {
    const movie = await this.getMovieByExternalIdUseCase.execute(movieId);
    const movieReviews = await this.movieRepository.findByExternalIdWithReviews(
      movie.externalId,
    );

    if (!movieReviews) {
      throw new MovieNotFound();
    }

    return movieReviews;
  }
}
