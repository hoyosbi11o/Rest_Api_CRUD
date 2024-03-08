"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const orderControllers_1 = require("../controllers/orderControllers");
const session_1 = require("../middleware/session");
/*
Esta ruta solo puede accerder las personas que tienen sesion activa
**/
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', session_1.checkJWT, orderControllers_1.getItems);
