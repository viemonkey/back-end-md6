declare class HouseService {
    private Repository;
    constructor();
    postHouse: (data: any) => Promise<any>;
    updateHouse: (id: any, data: any) => Promise<any>;
    deleteHouse: (id: any) => Promise<any>;
    findByAll: () => Promise<any>;
    findById: (id: any) => Promise<any>;
    findByName: (name: any) => Promise<any>;
    findByStatus: (status: any) => Promise<any>;
}
declare const _default: HouseService;
export default _default;
