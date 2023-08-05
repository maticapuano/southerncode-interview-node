import { Injectable } from "@nestjs/common";
import { TMDBAdapter } from "../domain/adapters/tmdb.adapter";
import { Movie } from "../domain/contracts/movie";
import { MovieNotFound } from "../domain/exceptions/movie-not-found";
import { MovieRepository } from "../domain/repositories/movie.repository";

@Injectable()
export class GetMovieByExternalIdUseCase {
  public constructor(
    private movieRepository: MovieRepository,
    private tmdbAdapter: TMDBAdapter,
  ) {}

  public async execute(externalId: string): Promise<Movie> {
    const movie = await this.movieRepository.findByExternalId(externalId);

    if (movie) return movie;

    const tmdbMovie = await this.tmdbAdapter.getMovieById(Number(externalId));

    if (!tmdbMovie) {
      throw new MovieNotFound();
    }

    return this.movieRepository.create({
      externalId: tmdbMovie.id.toString(),
      title: tmdbMovie.title,
      overview: tmdbMovie.overview,
      poster: tmdbMovie.poster,
      releaseDate: tmdbMovie.releaseDate,
    });
  }
}
