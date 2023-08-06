import { Module } from "@nestjs/common";
import { ReviewsModule } from "../reviews/reviews.module";
import { GetReviewsUseCase } from "./application/get-reviews.use-case";
import { GetReviewsController } from "./infrastructure/http/api/v1/controllers/get-reviews.controller";

@Module({
  imports: [ReviewsModule],
  providers: [GetReviewsUseCase],
  controllers: [GetReviewsController],
})
export class UsersModule {}
