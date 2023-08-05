import { TMDBAdapter } from "@/modules/movies/domain/adapters/tmdb.adapter";
import { TMDBMovie } from "@/modules/movies/domain/contracts/tmdb-movie";
import { Nullable } from "@/shared/domain/contracts/nullable";
import { Logger } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";

export class TMDBAdapterIml implements TMDBAdapter {
  private axiosInstance: AxiosInstance;

  public constructor(
    private apiKey: string,
    private language: string,
  ) {
    this.axiosInstance = axios.create({
      baseURL: "https://api.themoviedb.org/3",
      params: {
        api_key: this.apiKey,
        language: this.language,
      },
    });
  }

  public async getMovieById(id: number): Promise<Nullable<TMDBMovie>> {
    try {
      const { data: movie } = await this.axiosInstance.get(`/movie/${id}`);

      return {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        releaseDate: movie.release_date,
      };
    } catch (error) {
      Logger.error(error, this.constructor.name);

      return null;
    }
  }
}
