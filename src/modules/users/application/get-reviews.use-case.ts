import { Review } from "@/modules/reviews/domain/contracts/review";
import { ReviewRepository } from "@/modules/reviews/domain/repositories/review.repository";
import { Injectable } from "@nestjs/common";
import { UserNotFound } from "../domain/exceptions/user-not-found";

@Injectable()
export class GetReviewsUseCase {
  public constructor(private reviewRepository: ReviewRepository) {}

  public async execute(userName: string): Promise<Review[]> {
    const userExists = await this.reviewRepository.existsUsername(userName);

    if (!userExists) {
      throw new UserNotFound();
    }

    return this.reviewRepository.findByUserName(userName);
  }
}
