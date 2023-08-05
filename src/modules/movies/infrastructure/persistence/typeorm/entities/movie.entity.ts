import { Movie } from "@/modules/movies/domain/contracts/movie";
import { Review } from "@/modules/reviews/domain/contracts/review";
import { ReviewEntity } from "@/modules/reviews/infrastructure/persistence/typeorm/entities/review.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("movies")
export class MovieEntity implements Movie {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ name: "external_id" })
  public externalId: string;

  @Column()
  public title: string;

  @Column({ name: "release_date" })
  public releaseDate: string;

  @Column()
  public poster: string;

  @Column({ type: "text" })
  public overview: string;

  @OneToMany(() => ReviewEntity, review => review.movie)
  public reviews: Review[];
}
