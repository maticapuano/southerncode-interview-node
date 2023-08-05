import { CreateMovie, Movie } from "@/modules/movies/domain/contracts/movie";
import { MovieRepository } from "@/modules/movies/domain/repositories/movie.repository";
import { Nullable } from "@/shared/domain/contracts/nullable";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MovieEntity } from "../entities/movie.entity";

export class MovieRepositoryTypeorm implements MovieRepository {
  public constructor(
    @InjectRepository(MovieEntity)
    private ormRepository: Repository<MovieEntity>,
  ) {}

  public async findByExternalId(externalId: string): Promise<Nullable<Movie>> {
    return this.ormRepository.findOne({
      where: {
        externalId,
      },
    });
  }

  public async findByExternalIdWithReviews(
    externalId: string,
  ): Promise<Nullable<Movie>> {
    return this.ormRepository.findOne({
      where: {
        externalId,
      },
      relations: ["reviews"],
    });
  }

  public async create(data: CreateMovie): Promise<Movie> {
    const movie = this.ormRepository.create(data);

    await this.ormRepository.save(movie);

    return movie;
  }
}
