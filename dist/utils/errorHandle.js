"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHTTP = void 0;
const handleHTTP = (res, error) => {
    res.status(500);
    res.send({ error });
};
exports.handleHTTP = handleHTTP;
