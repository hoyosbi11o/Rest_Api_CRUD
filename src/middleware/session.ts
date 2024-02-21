import { NextFunction, Response } from "express"
import { verifyToken } from "../utils/jwtHandle"
import { RequestExt } from "../interfaces/req-ext"

const checkJWT=(req:RequestExt, res:Response, next: NextFunction)=>{
    try {
        const jwtByUser=req.headers.authorization || ''
        const jwt = jwtByUser.split(' ').pop()
        const isUser=verifyToken(`${jwt}`)  as {id:string}
        if (!isUser) {
            res.status(401)
            res.send("NO_TIENES_UN_JWT_VALIDO")
        }else {
            req.user=isUser;
            console.log({jwtByUser});
            next()
            
        }
    } catch (e) {
        console.log(e);
       res.status(400) 
       res.send("SESION_NO_VALIDAD")
    }
}
export{checkJWT}