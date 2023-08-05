import { SharedModule } from "@/shared/shared.module";
import { Module } from "@nestjs/common";
import { MoviesModule } from "./movies/movies.module";

@Module({
  imports: [SharedModule, MoviesModule],
})
export class CoreModule {}
