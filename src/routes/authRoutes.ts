import { Request, Response, Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/authControllers";

const router= Router()

router.post('/register', registerCtrl )
router.post('/login', loginCtrl)


export {router}