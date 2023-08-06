import { Review } from "@/modules/reviews/domain/contracts/review";
import { ReviewRepository } from "@/modules/reviews/domain/repositories/review.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GetReviewsUseCase {
  public constructor(private reviewRepository: ReviewRepository) {}

  public async execute(userName: string): Promise<Review[]> {
    return this.reviewRepository.findByUserName(userName);
  }
}
