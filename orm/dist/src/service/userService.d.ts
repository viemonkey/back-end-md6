declare class UserService {
    private Repository;
    constructor();
    getUser: (role: any) => Promise<any>;
    getAll: () => Promise<any>;
    findById: (id: any) => Promise<any>;
    update: (id: any, data: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    register: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<"User is not exist" | {
        idUser: any;
        username: any;
        role: string;
        image: any;
    } | "Password is wrong">;
}
declare const _default: UserService;
export default _default;
