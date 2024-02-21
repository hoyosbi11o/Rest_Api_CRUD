/**
import { Request, Response } from "express"
import { handleHTTP } from "../utils/errorHandle"
import { JwtPayload } from "jsonwebtoken"
import { RequestExt } from "../interfaces/req-ext"



 * Description placeholder
 * @date 2/21/2024 - 12:56:30 PM
 *
const getItems=(req: RequestExt, res: Response)=>{
try {
    res.send({
        data:'ESTO SOLO LO VEN LAS PERSONA CON SESION/ JWT',
        user:req.user
    })
} catch (error) {
        handleHTTP(res, "ERROR_GET_BLOGS \n "+error)

}
}



export {getItems}
*/