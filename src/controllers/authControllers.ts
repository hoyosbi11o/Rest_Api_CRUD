import { Request, Response } from "express"
import {loginUser,registerNewUSer} from "../services/authServices"
const registerCtrl= async ({body}: Request, res: Response)=>{
    const responseUser= await registerNewUSer(body)
    res.send(responseUser)
}

const loginCtrl= async (req: Request, res: Response)=>{
    
}


export {registerCtrl,loginCtrl}