import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule, ConfigurationService } from '@eshop/common';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigurationModule,
    TypeOrmModule.forRootAsync({
      useFactory: async (configurationService: ConfigurationService) => ({
        type: 'postgres',
        url: configurationService.POSTGRES_DB_URL,
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
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
