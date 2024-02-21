/**
import {hash, compare} from "bcryptjs"

 * Description placeholder
 * @date 2/21/2024 - 4:14:39 PM
 *
 * @async
const encrypt= async(passPlaine:string)=>{
    const passwordHash= await hash(passPlaine, 8)
    return passwordHash
}

/**
 * Description placeholder
 * @date 2/21/2024 - 4:14:39 PM
 *
 * @async
const verifiid= async(passPlaine:string ,passwordHash:string)=>{
    const isCorrect=await compare(passPlaine,passwordHash)
    return isCorrect
}

export {encrypt,verifiid}
*/