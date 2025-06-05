import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { User } from '../users/user.entity/user.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepo: Repository<Book>,
  ) {}

  create(createBookDto: CreateBookDto, user: User) {
    const book = this.booksRepo.create({ ...createBookDto, user });
    return this.booksRepo.save(book);
  }

  findAll(user: User) {
    return this.booksRepo.find({ where: { user: { id: user.id } } });
  }

  async findOne(id: string, user: User) {
    const book = await this.booksRepo.findOne({
      where: { id, user: { id: user.id } },
    });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async update(id: string, dto: Partial<CreateBookDto>, user: User) {
    const book = await this.findOne(id, user);
    Object.assign(book, dto);
    return this.booksRepo.save(book);
  }

  async remove(id: string, user: User) {
    const book = await this.findOne(id, user);
    await this.booksRepo.remove(book);
    return {
      message: 'Book Deleted Successfully',
    };
  }
}
