import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity
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
    age: number;

    @Column({ type: 'varchar'})
    password: string;

    @Column({ type: 'enum', enum: ['male','female','unspecified']})
    gender: string;
}
