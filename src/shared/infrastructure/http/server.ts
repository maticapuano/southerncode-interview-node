import { AppConfig } from "@/config/app";
import { CoreModule } from "@/modules/core.module";
import { Logger, VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(CoreModule, {
    cors: true,
  });

  app.enableCors({
    origin: AppConfig.corsAllowedOrigins,
    credentials: true,
  });

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: AppConfig.defaultApiVersion,
  });

  app.enableShutdownHooks();

  await app.listen(AppConfig.PORT, () => {
    Logger.log(
      `Server ready on: http://localhost:${AppConfig.PORT}`,
      "Bootstrap",
    );
  });
};

bootstrap();
