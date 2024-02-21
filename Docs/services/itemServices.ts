/**
import { Car } from "../interfaces/CarInterfaces"
import ItemModel from "../models/itemModelo"

 * Description placeholder
 * @date 2/21/2024 - 1:11:39 PM
 *
 * @async
const insertCar= async(item:Car)=>{
    const responseInsert= await ItemModel.create(item)
    return responseInsert;
}
/**
 * Description placeholder
 * @date 2/21/2024 - 1:11:39 PM
 *
 * @async
const getCars= async()=>{
    const responseGetCars= await ItemModel.find({})
    return responseGetCars;
}
/**
 * Description placeholder
 * @date 2/21/2024 - 1:11:38 PM
 *
 * @async
const getCar= async(id:string)=>{
    const responseGetCar= await ItemModel.findOne({_id:id})
    return responseGetCar;
}
/**
 * Description placeholder
 * @date 2/21/2024 - 1:11:38 PM
 *
 * @async
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

/**
 * Description placeholder
 * @date 2/21/2024 - 1:11:38 PM
 *
 * @async
const deleteCar= async(id:string)=>{
    const responseDeleteCar= await ItemModel.deleteOne({_id:id})
    return responseDeleteCar;
}
export{ insertCar,getCars,getCar, putCar, deleteCar}*/