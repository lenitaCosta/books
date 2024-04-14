import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { PrismaService } from './database/prismaService';

@Module({
  controllers: [BookController],
  providers: [BookService, PrismaService, BookService],
})
export class BookModule {}
