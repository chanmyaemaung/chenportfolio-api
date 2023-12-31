import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AllExceptionsFilter } from "./all-exceptions.filter";
import { AppModule } from "./app.module";
import corsOptions from "./config/corsOptions";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  //* To use the AllExceptionsFilter, use the following code:
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  //* To disable the default X-Powered-By header, use the following code:
  app.getHttpAdapter().getInstance().disable("x-powered-by");

  //* To enable CORS, use the following code:
  app.enableCors(corsOptions);

  //* To set a global prefix, use the following code:
  app.setGlobalPrefix("api");

  //* To enable rate limiting, use the following code:
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
