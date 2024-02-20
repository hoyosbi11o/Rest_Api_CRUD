import { Car } from "../interfaces/CarInterfaces"
import ItemModel from "../models/itemModelo"

const getOrders= async()=>{
    const responseGetCars= await ItemModel.find({})
    return responseGetCars;
}

export{ getOrders}