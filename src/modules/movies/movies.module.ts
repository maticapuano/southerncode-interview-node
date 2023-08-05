import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieRepository } from "./domain/repositories/movie.repository";
import { MovieEntity } from "./infrastructure/persistence/typeorm/entities/movie.entity";
import { MovieRepositoryTypeorm } from "./infrastructure/persistence/typeorm/repositories/movie.repository";

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity])],
  providers: [
    {
      provide: MovieRepository,
      useClass: MovieRepositoryTypeorm,
    },
  ],
  exports: [MovieRepository],
})
export class MoviesModule {}
