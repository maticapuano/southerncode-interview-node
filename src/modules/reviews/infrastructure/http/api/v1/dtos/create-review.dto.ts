import { CreateReview } from "@/modules/reviews/domain/contracts/review";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";

export class CreateReviewDto implements CreateReview {
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @ApiProperty({
    example: "500",
    description: "The movie id equals to the movie's imdb id",
  })
  public movieId: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  @ApiProperty({
    example: "John Doe",
    description: "The user's name",
  })
  public userName: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(10)
  @ApiProperty({
    example: 5,
    minimum: 1,
    maximum: 10,
    description: "Rating from 1 to 10 stars for the movie",
  })
  public rating: number;
}
