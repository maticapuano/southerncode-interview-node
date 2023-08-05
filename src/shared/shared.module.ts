import { Global, Module } from "@nestjs/common";
import { PersistenceModule } from "./infrastructure/persistence/persistence.module";

@Global()
@Module({
  imports: [PersistenceModule],
})
export class SharedModule {}
