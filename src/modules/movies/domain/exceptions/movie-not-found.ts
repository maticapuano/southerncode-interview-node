import { NotFoundException } from "@nestjs/common";

export class MovieNotFound extends NotFoundException {
  public constructor() {
    super("Sorry, we couldn't find the movie you were looking for");
  }
}
