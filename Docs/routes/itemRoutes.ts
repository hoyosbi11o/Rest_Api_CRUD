/**
import { Request, Response, Router } from "express";
import {
     deleteItem, 
     getItem, 
     getItems, 
     postItem, 
     putItem 
} from "../controllers/itemControllers";
import { logMiddleware } from "../middleware/log";

 * Description placeholder
 * @date 2/21/2024 - 1:08:19 PM
 *
 * @type {*}
const router= Router()

router.get('/', getItems)
router.get('/:id', logMiddleware, getItem)
router.post('/', postItem)
router.put('/:id', putItem)
router.delete('/:id', deleteItem)


export {router}
*/