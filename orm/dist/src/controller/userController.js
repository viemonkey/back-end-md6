"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    constructor() {
        this.getAllUser = async (req, res) => {
            let user = '';
            if (req.query.id) {
                user = await this.userService.findById(req.query.id);
            }
            else if (req.query.role) {
                user = await this.userService.getUser(req.query.role);
            }
            else {
                user = await this.userService.getAll();
            }
            res.json(user);
        };
        this.register = async (req, res) => {
            let result = await userService_1.default.register(req.body);
            res.json("dang ky tai khoan thanh cong");
        };
        this.login = async (req, res) => {
            try {
                let resultCheck = await userService_1.default.checkUser(req.body);
                res.status(200).json({
                    message: {
                        token: resultCheck,
                        username: req.body.username
                    },
                    success: true,
                });
            }
            catch (e) {
                console.log('error login: ', e);
                res.status(500).json({
                    message: 'error login',
                    success: false
                });
            }
        };
        this.update = async (req, res) => {
            let result = await this.userService.update(req.params.id, req.body);
            res.json("sửa thành công");
        };
        this.delete = async (req, res) => {
            let user = await userService_1.default.delete(req.params.id);
            res.json('xoa thanh cong');
        };
        this.userService = userService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map