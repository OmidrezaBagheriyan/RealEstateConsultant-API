import { IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateRentDto {
    @IsString()
    @MinLength(10, {
        message: 'Title must have atleast 2 characters.'
    })
    @IsNotEmpty()
    title: string;
    
    @IsInt()
    price:number;

    @IsInt()
    meter:number;

    @IsInt()
    rental_price:number;
    
    @IsInt()
    number_of_rooms:number;

    @IsInt()
    floor:number;
    
    @IsInt()
    unit:number;

    @IsString()
    @MinLength(10, {
        message: 'Title must have atleast 2 characters.'
    })
    @IsNotEmpty()
    address: string;

    @IsString()
    description: string;
}
