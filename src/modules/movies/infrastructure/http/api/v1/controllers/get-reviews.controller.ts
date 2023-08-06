import { GetMovieReviewsUseCase } from "@/modules/movies/application/get-movie-reviews.use-case";
import { Movie } from "@/modules/movies/domain/contracts/movie";
import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@Controller({
  path: "/movies",
  version: "1",
})
@ApiTags("movies")
export class GetReviewsController {
  public constructor(private useCase: GetMovieReviewsUseCase) {}

  @Get("/:movieId/reviews")
  public async execute(@Param("movieId") moveId: string): Promise<Movie> {
    return this.useCase.execute(moveId);
  }
}
