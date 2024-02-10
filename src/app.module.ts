import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { SalesModule } from './sales/sales.module';
import { Sale } from './sales/entities/sale.entity';
import { RentsModule } from './rents/rents.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'sara',
      username: 'postgres',
      entities: [User, Sale],
      database: 'realEstateConsultantDB',
      synchronize: true,
      logging: true
    }),
    UsersModule,
    SalesModule,
    RentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
