import { Request, Response } from "express"
import { handleHTTP } from "../utils/errorHandle"
import { getCars, getCar, insertCar } from "../services/itemServices"


const getItem= async({params}: Request, res: Response)=>{
try {
    const {id}=params
    const respondeGetCar= await getCar(id)
    res.send(respondeGetCar) 
} catch (error) {
    handleHTTP(res, "ERROR_GET_ITEM \n "+error)
}
}
const getItems= async (req: Request, res: Response)=>{
    const respondeGetCars= await getCars()
    res.send(respondeGetCars)
try {
    
} catch (error) {
        handleHTTP(res, "ERROR_GET_ITEMS \n "+error)

}
}
const postItem= async ({body}: Request, res: Response)=>{
try {
    const responseCar=await insertCar(body)
    res.send(responseCar)
} catch (error) {
        handleHTTP(res, "ERROR_POST_ITEM \n "+error)

}
}
const putItem=(req: Request, res: Response)=>{
try {
    
} catch (error) {
        handleHTTP(res, "ERROR_PUT_ITEM \n "+error)

}
}
const deleteItem=(req: Request, res: Response)=>{
try {
    
} catch (error) {
        handleHTTP(res, "ERROR_DELETE_ITEM \n "+error)

}
}

export {getItem,getItems,postItem,putItem,deleteItem}