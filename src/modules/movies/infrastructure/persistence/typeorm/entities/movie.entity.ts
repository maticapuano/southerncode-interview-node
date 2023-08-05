import { Movie } from "@/modules/movies/domain/contracts/movie";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
