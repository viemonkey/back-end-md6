import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./user";

@Entity()
export class House {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    name: string;

    @Column({type: 'varchar'})
    address: string;

    @Column({type: 'varchar'})
    numberOfBedrooms: string;

    @Column({type: 'varchar'})
    numberOfBathrooms: string;

    @Column({type: 'varchar'})
    description: string;

    @Column({type: 'varchar'})
    price: string;

    @Column({type: 'varchar'})
    avatar: string;

    @Column({type: 'varchar'})
    status: string;

    @ManyToOne(() => User, (user) => user.id)
    user: User;

}
