import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity';
import { Repository } from 'typeorm';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale) private readonly saleRepository:Repository<Sale>,
  ) { }

  createSale(createSaleDto:CreateSaleDto):Promise<Sale>{
    const sale: Sale = new Sale();
    sale.title = createSaleDto.title;
    sale.price = createSaleDto.price;
    sale.meter = createSaleDto.meter;
    sale.price_per_meter = createSaleDto.price_per_meter;
    sale.number_of_rooms = createSaleDto.number_of_rooms;
    sale.floor = createSaleDto.floor;
    sale.unit = createSaleDto.unit;
    sale.address = createSaleDto.address;
    sale.description = createSaleDto.description;
    return this.saleRepository.save(sale)
  }

  findAllSale():Promise<Sale[]> {
    return this.saleRepository.find();
  }

  viewSale(id: number): Promise<Sale> {
    return this.saleRepository.findOneBy({ id });
  }

  updateSale(id: number, updateSaleDto:UpdateSaleDto):Promise<Sale> {
      const sale: Sale = new Sale();
      sale.title = updateSaleDto.title;
      sale.price = updateSaleDto.price;
      sale.meter = updateSaleDto.meter;
      sale.price_per_meter = updateSaleDto.price_per_meter;
      sale.number_of_rooms = updateSaleDto.number_of_rooms;
      sale.floor = updateSaleDto.floor;
      sale.unit = updateSaleDto.unit;
      sale.address = updateSaleDto.address;
      sale.description = updateSaleDto.description;
      sale.id = id;
      return this.saleRepository.save(sale)
  }

  removeSale(id: number): Promise<{ affected?: number }> {
    return this.saleRepository.delete(id);
  }
}
