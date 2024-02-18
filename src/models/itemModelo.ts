import { Schema, Types, model, Model, version } from "mongoose";
import { Car } from "../interfaces/CarInterfaces";

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

const ItemModel= model('items',ItemSchema)

export default ItemModel