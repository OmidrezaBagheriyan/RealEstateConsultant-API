import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Controller('sales')
export class SalesController {
  constructor(private readonly saleService:SalesService) {}

  @Post()
  create(@Body() createSaleDto:CreateSaleDto){
    return this.saleService.createSale(createSaleDto);
  }

  @Get()
  findAll(){
    return this.saleService.findAllSale();
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return this.saleService.viewSale(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaleDto:UpdateSaleDto){
    return this.saleService.updateSale(+id, updateSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string){
    return this.saleService.removeSale(+id);
  }
}
