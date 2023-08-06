import { Review } from "@/modules/reviews/domain/contracts/review";
import { ReviewRepository } from "@/modules/reviews/domain/repositories/review.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ReviewEntity } from "../entities/review.entity";

export class ReviewRepositoryTypeorm implements ReviewRepository {
  public constructor(
    @InjectRepository(ReviewEntity)
    private ormRepository: Repository<ReviewEntity>,
  ) {}

  public async findByMovieId(movieId: string): Promise<Review[]> {
    return this.ormRepository.find({
      where: {
        movieId,
      },
    });
  }

  public async findByUserName(userName: string): Promise<Review[]> {
    return this.ormRepository.find({
      where: {
        userName,
      },
    });
  }

  public async create(review: Review): Promise<Review> {
    return this.ormRepository.save(review);
  }

  public async alreadyReviewed(
    movieId: string,
    userName: string,
  ): Promise<boolean> {
    const review = await this.ormRepository.findOne({
      where: {
        movieId,
        userName,
      },
    });

    return !!review;
  }

  public async existsUsername(userName: string): Promise<boolean> {
    const review = await this.ormRepository.findOne({
      where: {
        userName,
      },
    });

    return !!review;
  }
}
