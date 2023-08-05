export type Movie = {
  id: string;
  externalId: string;
  title: string;
  releaseDate: string;
  poster: string;
  overview: string;
};

export type CreateMovie = Omit<Movie, "id">;
