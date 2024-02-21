/**
 * import { Request, Response } from "express"
import {loginUser,registerNewUSer} from "../services/authServices"

 * Description placeholder
 * @date 2/21/2024 - 12:38:46 PM
 *
 * @async
const registerCtrl= async ({body}: Request, res: Response)=>{
    const responseUser= await registerNewUSer(body)
    res.send(responseUser)
}

/**
 * Description placeholder
 * @date 2/21/2024 - 12:38:46 PM
 *
 * @async
const loginCtrl= async ({body}: Request, res: Response)=>{
    const {email, password}=body
    const responseUser= await loginUser({email, password})
    if (responseUser==='PASSWORD_INCORRECT') {
        res.status(403)
        res.send(responseUser)
    }else {
         res.send(responseUser)

    }
}


export {registerCtrl,loginCtrl}
*/