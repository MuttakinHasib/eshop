import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import passport from 'passport';
import session from 'express-session';
import PostgresStore from 'connect-pg-simple';

const pgSession = PostgresStore(session);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
      },
      store: new pgSession({
        conString: process.env.DATABASE_URL,
        createTableIfMissing: true,
      }),
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  const port = process.env.PORT || 3000;
  await app.listen(port);

  Logger.log(`🚀 Application is running on: ${await app.getUrl()}/graphql`);
}

bootstrap();
