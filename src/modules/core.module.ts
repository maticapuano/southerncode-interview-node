import { SharedModule } from "@/shared/shared.module";
import { Module } from "@nestjs/common";
import { MoviesModule } from "./movies/movies.module";
import { ReviewsModule } from "./reviews/reviews.module";

@Module({
  imports: [SharedModule, MoviesModule, ReviewsModule],
})
export class CoreModule {}
