"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.putItem = exports.postItem = exports.getItems = exports.getItem = void 0;
const errorHandle_1 = require("../utils/errorHandle");
const getItem = (req, res) => {
    try {
    }
    catch (error) {
        (0, errorHandle_1.handleHTTP)(res, "ERROR_GET_BLOG \n " + error);
    }
};
exports.getItem = getItem;
const getItems = (req, res) => {
    try {
    }
    catch (error) {
        (0, errorHandle_1.handleHTTP)(res, "ERROR_GET_BLOGS \n " + error);
    }
};
exports.getItems = getItems;
const postItem = ({ body }, res) => {
    try {
        res.send(body);
    }
    catch (error) {
        (0, errorHandle_1.handleHTTP)(res, "ERROR_POST_BLOG \n " + error);
    }
};
exports.postItem = postItem;
const putItem = (req, res) => {
    try {
    }
    catch (error) {
        (0, errorHandle_1.handleHTTP)(res, "ERROR_PUT_BLOG \n " + error);
    }
};
exports.putItem = putItem;
const deleteItem = (req, res) => {
    try {
    }
    catch (error) {
        (0, errorHandle_1.handleHTTP)(res, "ERROR_DELETE_BLOG \n " + error);
    }
};
exports.deleteItem = deleteItem;
