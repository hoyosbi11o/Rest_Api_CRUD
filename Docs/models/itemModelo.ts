/**
import { Schema, Types, model, Model, version } from "mongoose";
import { Car } from "../interfaces/CarInterfaces";

 * Description placeholder
 * @date 2/21/2024 - 1:00:36 PM
 *
 * @type {*}
const ItemSchema= new Schema <Car>(
    {
        name:{
            type: String,
            required: true
        },
        color:{
            type: String,
            required: true
        },
        gas:{
            type: String,
            enum: ["gasoline" , "electric"]
        },
        year:{
            type: Number,
        },
        description:{
            type: String,
        },
        price:{
            type: Number,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)


 * Description placeholder
 * @date 2/21/2024 - 1:00:27 PM
 *
 * @type {*}
const ItemModel= model('items',ItemSchema)

export default ItemModel
*/