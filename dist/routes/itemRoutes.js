"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const itemControllers_1 = require("../controllers/itemControllers");
const log_1 = require("../middleware/log");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', itemControllers_1.getItems);
router.get('/:id', log_1.logMiddleware, itemControllers_1.getItem);
router.post('/', itemControllers_1.postItem);
router.put('/:id', itemControllers_1.putItem);
router.delete('/:id', itemControllers_1.deleteItem);