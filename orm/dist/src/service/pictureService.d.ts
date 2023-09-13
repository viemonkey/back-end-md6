declare class PictureService {
    private Repository;
    constructor();
    postPicture: (data: any) => Promise<any>;
    updatePicture: (id: any, data: any) => Promise<any>;
    deletePicture: (id: any) => Promise<any>;
    findByAll: () => Promise<any>;
    findById: (id: any) => Promise<any>;
}
declare const _default: PictureService;
export default _default;
