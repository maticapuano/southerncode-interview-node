import { NotFoundException } from "@nestjs/common";

export class MovieNotFound extends NotFoundException {
  public constructor() {
    super("Sorry, this movie was not found");
  }
}
