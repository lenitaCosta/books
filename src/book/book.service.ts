import { Injectable } from '@nestjs/common';
import { PrismaService } from './database/prismaService';
import { BookDTO } from './book.dto';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: BookDTO) {
    const bookExist = await this.prisma.book.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });
    if (bookExist) {
      throw new Error('Book already exists');
    }
    const createBook = await this.prisma.book.create({
      data,
    });

    return createBook;
  }
}
