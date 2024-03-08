"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItems = void 0;
const errorHandle_1 = require("../utils/errorHandle");
const getItems = (req, res) => {
    try {
        res.send({
            data: 'ESTO SOLO LO VEN LAS PERSONA CON SESION/ JWT',
            user: req.user
        });
    }
    catch (error) {
        (0, errorHandle_1.handleHTTP)(res, "ERROR_GET_BLOGS \n " + error);
    }
};
exports.getItems = getItems;
