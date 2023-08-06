import { NotFoundException } from "@nestjs/common";

export class UserNotFound extends NotFoundException {
  public constructor() {
    super("User not found");
  }
}
