import { TMDBConfig } from "@/config/tmdb";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GetMovieReviewsUseCase } from "./application/get-movie-reviews.use-case";
import { GetMovieByExternalIdUseCase } from "./application/get-movie.use-case";
import { TMDBAdapter } from "./domain/adapters/tmdb.adapter";
import { MovieRepository } from "./domain/repositories/movie.repository";
import { TMDBAdapterIml } from "./infrastructure/adapters/tmdb/tmdb";
import { GetReviewsController } from "./infrastructure/http/api/v1/controllers/get-reviews.controller";
import { MovieEntity } from "./infrastructure/persistence/typeorm/entities/movie.entity";
import { MovieRepositoryTypeorm } from "./infrastructure/persistence/typeorm/repositories/movie.repository";

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity])],
  providers: [
    {
      provide: MovieRepository,
      useClass: MovieRepositoryTypeorm,
    },
    {
      provide: TMDBAdapter,
      useFactory: (): TMDBAdapter => {
        return new TMDBAdapterIml(TMDBConfig.apiKey, TMDBConfig.language);
      },
    },
    GetMovieByExternalIdUseCase,
    GetMovieReviewsUseCase,
  ],
  controllers: [GetReviewsController],
  exports: [MovieRepository, GetMovieByExternalIdUseCase],
})
export class MoviesModule {}
