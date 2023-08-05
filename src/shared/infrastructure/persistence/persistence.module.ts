import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeormClientFactory } from "./typeorm/client";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => TypeormClientFactory.create().options,
    }),
  ],
})
export class PersistenceModule {}
