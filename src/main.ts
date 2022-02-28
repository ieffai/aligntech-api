import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle("Test task for Aligntech")
    .setDescription("REST API Documentation")
    .setVersion("1.0.0")
    .addTag("Aligntech")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  await app.listen(PORT, () => console.log(`Server started at PORT = ${PORT}`));
}

start();
