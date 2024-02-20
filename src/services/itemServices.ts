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
const putCar= async(id:string, data:Car)=>{
    const responsePutCar= await ItemModel.findOneAndUpdate(
        {_id:id},
        data,
        {
            new: true
        }
        )
    return responsePutCar;
}

const deleteCar= async(id:string)=>{
    const responseDeleteCar= await ItemModel.deleteOne({_id:id})
    return responseDeleteCar;
}
export{ insertCar,getCars,getCar, putCar, deleteCar}