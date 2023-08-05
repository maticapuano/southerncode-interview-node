import { Injectable } from "@nestjs/common";
import { Movie } from "../domain/contracts/movie";
import { MovieNotFound } from "../domain/exceptions/movie-not-found";
import { MovieRepository } from "../domain/repositories/movie.repository";

@Injectable()
export class GetMovieReviewsUseCase {
  public constructor(private movieRepository: MovieRepository) {}

  public async execute(movieId: string): Promise<Movie> {
    const movie = await this.movieRepository.findByExternalIdWithReviews(
      movieId,
    );

    if (!movie) {
      throw new MovieNotFound();
    }

    return movie;
  }
}
