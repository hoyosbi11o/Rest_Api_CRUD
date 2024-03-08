"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJWT = void 0;
const jwtHandle_1 = require("../utils/jwtHandle");
const checkJWT = (req, res, next) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = (0, jwtHandle_1.verifyToken)(`${jwt}`);
        if (!isUser) {
            res.status(401);
            res.send("NO_TIENES_UN_JWT_VALIDO");
        }
        else {
            req.user = isUser;
            console.log({ jwtByUser });
            next();
        }
    }
    catch (e) {
        console.log(e);
        res.status(400);
        res.send("SESION_NO_VALIDAD");
    }
};
exports.checkJWT = checkJWT;
