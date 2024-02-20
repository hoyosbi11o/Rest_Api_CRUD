import { Auth } from "../interfaces/authInterface"
import { User } from "../interfaces/userInterface"
import UserModel from "../models/userModels"

const registerNewUSer= async ({email, password,name}: User)=>{
    const checkIs= await UserModel.findOne({email})
    if (checkIs) return "ALREADY_USER"

    const registerNewUSer= await UserModel.create({email,password,name})

    return registerNewUSer
}

const loginUser= async ()=>{
    
}

export{registerNewUSer,loginUser}