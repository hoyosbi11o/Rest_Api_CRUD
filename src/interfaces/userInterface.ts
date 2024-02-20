import { Auth } from "./authInterface";

export interface User extends Auth {
    name:string,
    description: string 
}