/**
import {Router } from "express";
import { getItems } from "../controllers/orderControllers";
import { checkJWT } from "../middleware/session";

Esta ruta solo puede accerder las personas que tienen sesion activa


 * Description placeholder
 * @date 2/21/2024 - 1:08:43 PM
 *
 * @type {*}
const router= Router()

router.get('/',checkJWT, getItems)

export {router}
*/