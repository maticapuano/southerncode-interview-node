import { TMDBConfig } from "@/config/tmdb";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TMDBAdapter } from "./domain/adapters/tmdb.adapter";
import { MovieRepository } from "./domain/repositories/movie.repository";
import { TMDBAdapterIml } from "./infrastructure/adapters/tmdb/tmdb";
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
  ],
  exports: [MovieRepository],
})
export class MoviesModule {}
