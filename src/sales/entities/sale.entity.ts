import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 64 })
    title: string;

    @Column({ type: 'int'})
    price: number;

    @Column({ type: 'int'})
    meter: number;

    @Column({ type: 'int'})
    price_per_meter: number;

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

    @OneToMany(type=> User, user => user.rents)
    user:User;
}
