import { User } from "./user";
import { House } from "./house";
export declare class Order {
    id: number;
    rentalTime: string;
    checkIn: string;
    checkOut: string;
    totalMoney: string;
    status: string;
    action: string;
    user: User;
    house: House;
}
