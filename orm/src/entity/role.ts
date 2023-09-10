import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar'})
    name: string;

}
