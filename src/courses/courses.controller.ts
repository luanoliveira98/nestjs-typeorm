import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'Courses list';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Course #${id}`;
  }

  @Post()
  create(@Body('name') body) {
    return body;
  }
}
