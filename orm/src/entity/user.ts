import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    username: string;

    @Column({type: 'varchar'})
    password: string;

    @Column({type: 'varchar'})
    role: string;

    @Column({type: 'varchar'})
    telephone: string;
   
}
