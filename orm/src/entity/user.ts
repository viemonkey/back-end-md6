import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Role} from "./role";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar'})
    username: string;
    @Column({type: 'varchar'})
    password: string;
    @Column({type: 'varchar'})
    telephone: string;
    @Column({type: 'varchar'})
    address: string;
    @ManyToOne(() => Role, (role) => role.id)
    role: Role;

}
