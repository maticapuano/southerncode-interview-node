import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MoviesModule } from "../movies/movies.module";
import { CreateReviewUseCase } from "./application/create-review.use-case";
import { ReviewRepository } from "./domain/repositories/review.repository";
import { CreateReviewController } from "./infrastructure/http/api/v1/controllers/create-review.controller";
import { ReviewEntity } from "./infrastructure/persistence/typeorm/entities/review.entity";
import { ReviewRepositoryTypeorm } from "./infrastructure/persistence/typeorm/repositories/review.repository";

@Module({
  imports: [TypeOrmModule.forFeature([ReviewEntity]), MoviesModule],
  providers: [
    {
      provide: ReviewRepository,
      useClass: ReviewRepositoryTypeorm,
    },
    CreateReviewUseCase,
  ],
  controllers: [CreateReviewController],
  exports: [ReviewRepository],
})
export class ReviewsModule {}
