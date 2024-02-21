/**
import { Auth } from "../interfaces/authInterface"
import { User } from "../interfaces/userInterface"
import UserModel from "../models/userModels"
import { encrypt, verifiid } from "../utils/bcryptHandle"
import { generateToken } from "../utils/jwtHandle"

 * Description placeholder
 * @date 2/21/2024 - 1:09:33 PM
 *
 * @async
const registerNewUSer= async ({email, password,name}: User)=>{
    const checkIs= await UserModel.findOne({email})
    if (checkIs) return "ALREADY_USER"
    const passHash=await encrypt(password)
    const registerNewUSer= await UserModel.create({email,password:passHash,name})

    return registerNewUSer
}


 * Description placeholder
 * @date 2/21/2024 - 1:09:33 PM
 *
 * @async
const loginUser= async ({email, password}:Auth)=>{
    const checkIs= await UserModel.findOne({email})
    if (!checkIs) return "NOT_FOUND_USER"
    
    const passwordHash= checkIs.password

    const isCorrect= await verifiid(password, passwordHash)

    if (!isCorrect) return "PASSWORD_INCORRECT"

    const token= generateToken(checkIs.email)
    const data={
        token,
        user: checkIs
    }
    return data
}

export{registerNewUSer,loginUser}
*/