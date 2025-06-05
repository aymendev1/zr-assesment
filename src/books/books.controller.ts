import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../users/user.entity/user.entity';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiTags('books')
@ApiBearerAuth()
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  create(@Body() dto: CreateBookDto, @GetUser() user: User) {
    return this.booksService.create(dto, user);
  }

  @Get()
  findAll(@GetUser() user: User) {
    return this.booksService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string, @GetUser() user: User) {
    return this.booksService.findOne(id, user);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: CreateBookDto,
    @GetUser() user: User,
  ) {
    return this.booksService.update(id, dto, user);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string, @GetUser() user: User) {
    return this.booksService.remove(id, user);
  }
}
