import { GetMovieByExternalIdUseCase } from "@/modules/movies/application/get-movie.use-case";
import { Injectable } from "@nestjs/common";
import { ReviewAlreadyExists } from "../domain/exceptions/already-exists";
import { ReviewRepository } from "../domain/repositories/review.repository";
import { CreateReviewInput } from "./create-review.input";

@Injectable()
export class CreateReviewUseCase {
  public constructor(
    private reviewRepository: ReviewRepository,
    private getMovieUseCase: GetMovieByExternalIdUseCase,
  ) {}

  public async execute(data: CreateReviewInput): Promise<void> {
    const movie = await this.getMovieUseCase.execute(data.movieId);

    const hasReviewed = await this.reviewRepository.alreadyReviewed(
      movie.id,
      data.userName,
    );

    if (hasReviewed) {
      throw new ReviewAlreadyExists();
    }

    await this.reviewRepository.create({
      movieId: movie.id,
      userName: data.userName,
      rating: data.rating,
    });
  }
}
