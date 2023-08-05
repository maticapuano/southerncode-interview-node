import { Movie } from "@/modules/movies/domain/contracts/movie";
import { MovieEntity } from "@/modules/movies/infrastructure/persistence/typeorm/entities/movie.entity";
import { Review } from "@/modules/reviews/domain/contracts/review";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("reviews")
export class ReviewEntity implements Review {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ name: "movie_id" })
  public movieId: string;

  @Column({ name: "user_name" })
  public userName: string;

  @Column()
  public rating: number;

  @ManyToOne(() => MovieEntity, movie => movie.reviews)
  @JoinColumn({ name: "movie_id" })
  public movie: Movie;

  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  public createdAt: Date;
}
