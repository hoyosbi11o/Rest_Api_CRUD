/**
import {sign, verify} from "jsonwebtoken"
 * Description placeholder
 * @date 2/21/2024 - 4:15:15 PM
 *
 * @type {*}
 */
const JWT_SECRET= process.env.JWT_SECRET || "token.010101"

/**
 * Description placeholder
 * @date 2/21/2024 - 4:15:15 PM
 *
const generateToken=(id:string)=>{
    const jwt = sign({ id }, JWT_SECRET, {
        expiresIn: "2h",
    })
    return jwt
}

/**
 * Description placeholder
 * @date 2/21/2024 - 4:15:15 PM
 *
const verifyToken= (jwt:string)=>{
const isOk= verify(jwt, JWT_SECRET)
return isOk
}

export {generateToken,verifyToken}
*/