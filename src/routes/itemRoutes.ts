import { Request, Response, Router } from "express";
import {
     deleteItem, 
     getItem, 
     getItems, 
     postItem, 
     putItem 
} from "../controllers/itemControllers";

const router= Router()

router.get('/', getItems)
router.get('/:id', getItem)
router.post('/', postItem)
router.put('/:id', putItem)
router.delete('/:id', deleteItem)


export {router}