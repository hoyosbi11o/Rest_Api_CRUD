import { Car } from "../interfaces/CarInterfaces"
import ItemModel from "../models/itemModelo"

const insertCar= async(item:Car)=>{
    const responseInsert= await ItemModel.create(item)
    return responseInsert;
}
const getCars= async()=>{
    const responseGetCars= await ItemModel.find({})
    return responseGetCars;
}
const getCar= async(id:string)=>{
    const responseGetCar= await ItemModel.findOne({_id:id})
    return responseGetCar;
}


export{ insertCar,getCars,getCar}