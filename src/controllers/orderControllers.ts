import { Request, Response } from "express"
import { handleHTTP } from "../utils/errorHandle"



const getItems=(req: Request, res: Response)=>{
try {
    res.send({
        data:'ESTO SOLO LO VEN LAS PERSONA CON SESION/ JWT',
    })
} catch (error) {
        handleHTTP(res, "ERROR_GET_BLOGS \n "+error)

}
}



export {getItems}