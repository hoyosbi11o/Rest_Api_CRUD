import {Router } from "express";
import { getItems } from "../controllers/orderControllers";
import { checkJWT } from "../middleware/session";
/*
Esta ruta solo puede accerder las personas que tienen sesion activa
**/

const router= Router()

router.get('/',checkJWT, getItems)

export {router}