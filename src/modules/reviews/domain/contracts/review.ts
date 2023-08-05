import { Movie } from "@/modules/movies/domain/contracts/movie";

export type Review = {
  id: string;
  movieId: string;
  userName: string;
  rating: number;
  movie: Movie;
  createdAt: Date;
};

export type CreateReview = {
  movieId: string;
  userName: string;
  rating: number;
};
