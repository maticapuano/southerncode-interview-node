import { AppConfig } from "@/config/app";
import { CoreModule } from "@/modules/core.module";
import { Logger, ValidationPipe, VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { SwaggerBuilder } from "./utils/swagger-builder";

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

  app.useGlobalPipes(new ValidationPipe());

  SwaggerBuilder.build(app);

  await app.listen(AppConfig.port, () => {
    Logger.log(
      `Server ready on: http://localhost:${AppConfig.port}`,
      "Bootstrap",
    );
  });
};

bootstrap();
