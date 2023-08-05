import { CreateReview, Review } from "../contracts/review";

export abstract class ReviewRepository {
  public abstract create(review: CreateReview): Promise<Review>;
  public abstract findByMovieId(movieId: string): Promise<Review[]>;
  public abstract findByUserName(userName: string): Promise<Review[]>;
  public abstract alreadyReviewed(
    movieId: string,
    userName: string,
  ): Promise<boolean>;
}
