import { AppConfig } from "@/config/app";
import { SwaggerConfig } from "@/config/swagger";
import { INestApplication, Logger } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export class SwaggerBuilder {
  private static logger = new Logger(SwaggerBuilder.name);

  public static build(app: INestApplication): void {
    if (!SwaggerConfig.enabled) {
      SwaggerBuilder.logger.debug("Swagger documentation disabled");

      return;
    }

    const options = new DocumentBuilder()
      .setTitle("Movies API Challenge")
      .setVersion("1.0")
      .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup("docs", app, document);

    SwaggerBuilder.logger.log(
      `Swagger documentation enabled at http://localhost:${AppConfig.port}/docs`,
    );
  }
}
