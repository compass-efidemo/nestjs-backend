import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { writeFileSync } from 'fs';
import { join } from 'path';

async function generateSwagger() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // Write the Swagger JSON to a file in the dist folder
  writeFileSync(
    join(process.cwd(), 'dist', 'swagger.json'),
    JSON.stringify(document, null, 2),
  );

  await app.close();
  process.exit(0); // Ensure the process exits
}

generateSwagger().catch((err) => {
  console.error('Error generating Swagger document', err);
  process.exit(1); // Ensure the process exits with an error code
});
