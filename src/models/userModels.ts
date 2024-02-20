import { Schema, Types, model, Model, version } from "mongoose";
import { User } from "../interfaces/userInterface";

const UserSchema= new Schema <User>(
    {
        name:{
            type: String,
            required:true
        },
        email:{
            type: String,
            required:true
            
        },
        password:{
            type: String,
            required:true,
            unique: true
        },
        description: {
            type: String,
            default:null
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const UserModel= model('users',UserSchema)

export default UserModel