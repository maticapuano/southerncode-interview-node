import { Review } from "@/modules/reviews/domain/contracts/review";
import { GetReviewsUseCase } from "@/modules/users/application/get-reviews.use-case";
import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@Controller("users")
@ApiTags("users")
export class GetReviewsController {
  public constructor(private useCase: GetReviewsUseCase) {}

  @Get(":userName/reviews")
  public async execute(
    @Param("userName")
    userName: string,
  ): Promise<Review[]> {
    return this.useCase.execute(userName);
  }
}
