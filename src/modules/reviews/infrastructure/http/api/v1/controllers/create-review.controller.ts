import { CreateReviewUseCase } from "@/modules/reviews/application/create-review.use-case";
import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateReviewDto } from "../dtos/create-review.dto";

@Controller({
  path: "reviews",
  version: "1",
})
@ApiTags("reviews")
export class CreateReviewController {
  public constructor(private useCase: CreateReviewUseCase) {}

  @Post()
  @ApiOperation({
    summary: "Create a review",
  })
  public async execute(@Body() data: CreateReviewDto): Promise<void> {
    await this.useCase.execute(data);
  }
}
