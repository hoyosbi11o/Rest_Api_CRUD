import { Request, Response } from "express"
import { handleHTTP } from "../utils/errorHandle"


const getItem=(req: Request, res: Response)=>{
try {
    
} catch (error) {
    handleHTTP(res, "ERROR_GET_BLOG \n "+error)
}
}
const getItems=(req: Request, res: Response)=>{
try {
    
} catch (error) {
        handleHTTP(res, "ERROR_GET_BLOGS \n "+error)

}
}
const postItem=({body}: Request, res: Response)=>{
try {
    res.send(body)
} catch (error) {
        handleHTTP(res, "ERROR_POST_BLOG \n "+error)

}
}
const putItem=(req: Request, res: Response)=>{
try {
    
} catch (error) {
        handleHTTP(res, "ERROR_PUT_BLOG \n "+error)

}
}
const deleteItem=(req: Request, res: Response)=>{
try {
    
} catch (error) {
        handleHTTP(res, "ERROR_DELETE_BLOG \n "+error)

}
}

export {getItem,getItems,postItem,putItem,deleteItem}