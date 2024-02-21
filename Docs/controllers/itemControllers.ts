/**
import { Request, Response } from "express"
import { handleHTTP } from "../utils/errorHandle"
import { getCars, getCar, insertCar, putCar,deleteCar  } from "../services/itemServices"


 * Description placeholder
 * @date 2/21/2024 - 12:40:44 PM
 *
 * @async
const getItem= async({params}: Request, res: Response)=>{
try {
    const {id}=params
    const respondeGetCar= await getCar(id)
    const data = respondeGetCar ? respondeGetCar : "NOT_FOUND"
    res.send(data) 
} catch (error) {
    handleHTTP(res, "ERROR_GET_ITEM \n "+error)
}
}
/**
 * Description placeholder
 * @date 2/21/2024 - 12:40:44 PM
 *
 * @async
const getItems= async (req: Request, res: Response)=>{
    const respondeGetCars= await getCars()
    res.send(respondeGetCars)
try {
    
} catch (error) {
        handleHTTP(res, "ERROR_GET_ITEMS \n "+error)

}
}
/**
 * Description placeholder
 * @date 2/21/2024 - 12:40:44 PM
 *
 * @async
const postItem= async ({body}: Request, res: Response)=>{
try {
    const responseCar=await insertCar(body)
    res.send(responseCar)
} catch (error) {
        handleHTTP(res, "ERROR_POST_ITEM \n "+ error)

}
}
/**
 * Description placeholder
 * @date 2/21/2024 - 12:40:44 PM
 *
 * @async
const putItem=async ({params, body}: Request, res: Response)=>{
try {
    const {id}=params
    const responsePut= await putCar(id, body)
    res.send(responsePut)
} catch (error) {
        handleHTTP(res, "ERROR_PUT_ITEM \n "+error)

}
}
/**
 * Description placeholder
 * @date 2/21/2024 - 12:40:44 PM
 *
 * @async
const deleteItem= async({params}: Request, res: Response)=>{
try {
    const {id}=params
    const responseDelete= await deleteCar(id)
    res.send(responseDelete)
} catch (error) {
        handleHTTP(res, "ERROR_DELETE_ITEM \n "+error)

}
}

export {getItem,getItems,postItem,putItem,deleteItem}
*/