import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 64 })
    title: string;

    @Column({ type: 'int'})
    price: number;

    @Column({ type: 'int'})
    meter: number;

    @Column({ type: 'int'})
    rental_price: number;

    @Column({ type: 'int'})
    number_of_rooms: number;

    @Column({ type: 'int'})
    floor: number;

    @Column({ type: 'int'})
    unit: number;

    @Column({ type: 'varchar', length: 256 })
    address: string;

    @Column({ type: 'varchar', length: 512 })
    description: string;
}
