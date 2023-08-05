import { Review } from "@/modules/reviews/domain/contracts/review";

export type Movie = {
  id: string;
  externalId: string;
  title: string;
  releaseDate: string;
  poster: string;
  overview: string;
  reviews: Review[];
};

export type CreateMovie = Omit<Movie, "id">;
