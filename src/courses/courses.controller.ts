import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(@Res() response) {
    return response.status(200).send('Courses list');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Course #${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body('name') body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Update of Course #${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body() body) {
    return `Delete of Course #${id}`;
  }
}
