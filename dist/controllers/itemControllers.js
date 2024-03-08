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
exports.deleteItem = exports.putItem = exports.postItem = exports.getItems = exports.getItem = void 0;
const errorHandle_1 = require("../utils/errorHandle");
const itemServices_1 = require("../services/itemServices");
const getItem = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const respondeGetCar = yield (0, itemServices_1.getCar)(id);
        const data = respondeGetCar ? respondeGetCar : "NOT_FOUND";
        res.send(data);
    }
    catch (error) {
        (0, errorHandle_1.handleHTTP)(res, "ERROR_GET_ITEM \n " + error);
    }
});
exports.getItem = getItem;
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const respondeGetCars = yield (0, itemServices_1.getCars)();
    res.send(respondeGetCars);
    try {
    }
    catch (error) {
        (0, errorHandle_1.handleHTTP)(res, "ERROR_GET_ITEMS \n " + error);
    }
});
exports.getItems = getItems;
const postItem = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseCar = yield (0, itemServices_1.insertCar)(body);
        res.send(responseCar);
    }
    catch (error) {
        (0, errorHandle_1.handleHTTP)(res, "ERROR_POST_ITEM \n " + error);
    }
});
exports.postItem = postItem;
const putItem = ({ params, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const responsePut = yield (0, itemServices_1.putCar)(id, body);
        res.send(responsePut);
    }
    catch (error) {
        (0, errorHandle_1.handleHTTP)(res, "ERROR_PUT_ITEM \n " + error);
    }
});
exports.putItem = putItem;
const deleteItem = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const responseDelete = yield (0, itemServices_1.deleteCar)(id);
        res.send(responseDelete);
    }
    catch (error) {
        (0, errorHandle_1.handleHTTP)(res, "ERROR_DELETE_ITEM \n " + error);
    }
});
exports.deleteItem = deleteItem;
