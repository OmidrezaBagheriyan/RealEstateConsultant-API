import { Injectable } from '@nestjs/common';
import { CreateRentDto } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rent } from './entities/rent.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RentsService {
  constructor(
    @InjectRepository(Rent) private readonly rentRepository:Repository<Rent>,
  ) {}

  createRent(createRentDto:CreateRentDto):Promise<Rent>{
    const rent:Rent = new Rent()
    rent.title = createRentDto.title;
    rent.price = createRentDto.price;
    rent.meter = createRentDto.meter;
    rent.rental_price = createRentDto.rental_price;
    rent.number_of_rooms = createRentDto.number_of_rooms;
    rent.floor = createRentDto.floor;
    rent.unit = createRentDto.unit;
    rent.address = createRentDto.address;
    rent.description = createRentDto.description;
    return this.rentRepository.save(rent)
  }

  findAllRent():Promise<Rent[]>{
    return this.rentRepository.find();
  }

  viewRent(id: number):Promise<Rent>{
    return this.rentRepository.findOneBy({ id });
  }

  updateRent(id: number, updateRentDto:UpdateRentDto):Promise<Rent>{
    const rent:Rent = new Rent();
    rent.title = updateRentDto.title;
    rent.price = updateRentDto.price;
    rent.meter = updateRentDto.meter;
    rent.rental_price = updateRentDto.rental_price;
    rent.number_of_rooms = updateRentDto.number_of_rooms;
    rent.floor = updateRentDto.floor;
    rent.unit = updateRentDto.unit;
    rent.address = updateRentDto.address;
    rent.description = updateRentDto.description;
    rent.id = id;
    return this.rentRepository.save(rent);
  }

  removeRent(id: number):Promise<{ affected?: number}>{
    return this.rentRepository.delete(id);
  }
}
