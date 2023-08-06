import { SharedModule } from "@/shared/shared.module";
import { Module } from "@nestjs/common";
import { MoviesModule } from "./movies/movies.module";
import { ReviewsModule } from "./reviews/reviews.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [SharedModule, MoviesModule, ReviewsModule, UsersModule],
})
export class CoreModule {}
