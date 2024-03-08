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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.putCar = exports.getCar = exports.getCars = exports.insertCar = void 0;
const itemModelo_1 = __importDefault(require("../models/itemModelo"));
const insertCar = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const responseInsert = yield itemModelo_1.default.create(item);
    return responseInsert;
});
exports.insertCar = insertCar;
const getCars = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseGetCars = yield itemModelo_1.default.find({});
    return responseGetCars;
});
exports.getCars = getCars;
const getCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseGetCar = yield itemModelo_1.default.findOne({ _id: id });
    return responseGetCar;
});
exports.getCar = getCar;
const putCar = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const responsePutCar = yield itemModelo_1.default.findOneAndUpdate({ _id: id }, data, {
        new: true
    });
    return responsePutCar;
});
exports.putCar = putCar;
const deleteCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseDeleteCar = yield itemModelo_1.default.deleteOne({ _id: id });
    return responseDeleteCar;
});
exports.deleteCar = deleteCar;
