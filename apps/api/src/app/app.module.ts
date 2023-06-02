import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule, ConfigurationService } from '@eshop/common';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { UsersModule } from './modules/users/users.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { AuthModule } from './modules/auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigurationModule,
    TypeOrmModule.forRootAsync({
      useFactory: async (configurationService: ConfigurationService) => ({
        type: 'postgres',
        url: configurationService.DATABASE_URL,
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigurationService],
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'apps/api/src/graphql/schema.gql'),
      definitions: {
        path: join(process.cwd(), 'libs/types/src/graphql/index.ts'),
      },
      sortSchema: true,
    }),
    UsersModule,
    ProfilesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
