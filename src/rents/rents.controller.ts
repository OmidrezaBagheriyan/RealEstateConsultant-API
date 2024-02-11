import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RentsService } from './rents.service';
import { CreateRentDto } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';

@Controller('rents')
export class RentsController {
  constructor(private readonly rentsService: RentsService) {}

  @Post()
  create(@Body() createRentDto: CreateRentDto) {
    return this.rentsService.createRent(createRentDto);
  }

  @Get()
  findAll() {
    return this.rentsService.findAllRent();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentsService.viewRent(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRentDto: UpdateRentDto) {
    return this.rentsService.updateRent(+id, updateRentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentsService.removeRent(+id);
  }
}
