"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFile = void 0;
const storage_1 = require("../services/storage");
const errorHandle_1 = require("../utils/errorHandle");
const getFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user, file } = req;
        const dataToregister = {
            fileName: `${file === null || file === void 0 ? void 0 : file.filename}`,
            idUser: `${user === null || user === void 0 ? void 0 : user.id}`,
            path: `${file === null || file === void 0 ? void 0 : file.path}`
        };
        const response = yield (0, storage_1.registerUpload)(dataToregister);
        res.send(response);
    }
    catch (e) {
        (0, errorHandle_1.handleHTTP)(res, "ERROR_GET_BLOG");
    }
});
exports.getFile = getFile;