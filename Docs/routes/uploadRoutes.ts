/**
import { Router } from "express";
import {getFile} from "../controllers/upload"
import multerMiddleware from "../middleware/file"
import { checkJWT } from "../middleware/session";

 * Description placeholder
 * @date 2/21/2024 - 1:09:07 PM
 *
 * @type {*}
const router = Router();

router.post("/", checkJWT, multerMiddleware.single('myfile'), getFile);

export { router }
*/