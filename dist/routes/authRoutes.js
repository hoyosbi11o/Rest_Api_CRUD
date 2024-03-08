"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const authControllers_1 = require("../controllers/authControllers");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/register', authControllers_1.registerCtrl);
router.post('/login', authControllers_1.loginCtrl);
