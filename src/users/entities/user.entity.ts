import { Rent } from "src/rents/entities/rent.entity";
import { Sale } from "src/sales/entities/sale.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 64})
    name: string;

    @Column({ type: 'varchar', length: 32})
    username: string

    @Column({ type: 'varchar', length: 72})
    email: string;

    @Column({ type: 'int'})
    year_of_birth: number;

    @Column({ type: 'varchar'})
    password: string;

    @Column({ type: 'enum', enum: ['male','female','unspecified']})
    gender: string;

    @OneToMany(type=> Rent, rent=> rent.user)
    rents:Rent[]

    @OneToMany(type=> Sale, sale=> sale.user)
    sales:Sale[]

}
