import {hash, compare} from "bcryptjs"

const encrypt= async(passPlaine:string)=>{
    const passwordHash= await hash(passPlaine, 8)
    return passwordHash
}

const verifiid= async(passPlaine:string ,passwordHash:string)=>{
    const isCorrect=await compare(passPlaine,passwordHash)
    return isCorrect
}

export {encrypt,verifiid}