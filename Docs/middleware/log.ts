/**
import {Request,Response,NextFunction} from "express"
 * Description placeholder
 * @date 2/21/2024 - 12:59:48 PM
 *
const logMiddleware= (req:Request, res:Response,next:NextFunction)=>{
const header = req.headers
const userAgent=header["user-agent"]    
console.log("user-agent", userAgent);

next()
}

export {logMiddleware}*/