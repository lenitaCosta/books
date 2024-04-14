import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BookDTO } from './book/book.dto';
import { BookService } from './book/book.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly bookService: BookService,
  ) {}
}
