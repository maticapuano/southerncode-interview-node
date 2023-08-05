import { UnprocessableEntityException } from "@nestjs/common";

export class ReviewAlreadyExists extends UnprocessableEntityException {
  public constructor() {
    super("Sorry, you already reviewed this movie");
  }
}
