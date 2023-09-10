import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";

@Entity()
export class House {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name:string
    @Column({type: 'varchar', length: 255})
    address:string
    @Column({type: 'varchar',})
    numberOfBedroom:string
    @Column({type: 'varchar'})
    numberOfBathroom:string
    @Column({type: 'text'})
    detail: string;
    @Column({type: 'text'})
    money: string;
    @Column({type: 'varchar',})
    date: string;
    @Column({type: 'longtext', nullable: true})
    image : string;
    // @Column({type: 'varchar',default: 'công khai'})
    // role: string;
    @ManyToOne(() => User, (user) => user.id)
    user: User;



}
