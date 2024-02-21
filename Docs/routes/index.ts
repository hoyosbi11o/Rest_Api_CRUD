/**
import { Router } from "express";
import {readdirSync} from 'node:fs'

 * Description placeholder
 * @date 2/21/2024 - 1:07:31 PM
 *
 * @type {string}

const PATH_ROUTER= `${__dirname}`


 * Description placeholder
 * @date 2/21/2024 - 1:07:31 PM
 *
 * @type {*}
const router = Router()



 * Description placeholder
 * @date 2/21/2024 - 1:07:31 PM

const clearFileName= (fileName: string)=>{
    const file=fileName.split('.').shift()
    return file
}

readdirSync(PATH_ROUTER).filter((fileName)=>{
    const cleanName= clearFileName(fileName)
    if (cleanName!=="index") {
        import(`./${cleanName}`)
        .then((moduleRouter) =>{
            console.log(`se esta crgando la ruta..../${cleanName}`);
            
            router.use(`/${cleanName}`, moduleRouter.router)
        })        
    }
})



export {router}
*/