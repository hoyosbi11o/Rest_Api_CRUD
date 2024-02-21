import { Auth } from "./authInterface";

/**
 * Description placeholder
 * @date 2/21/2024 - 12:58:33 PM
 *
 * @export
 * @interface User
 * @typedef {User}
 * @extends {Auth}
 */
export interface User extends Auth {
    /**
     * Description placeholder
     * @date 2/21/2024 - 12:58:33 PM
     *
     * @type {string}
     */
    name:string,
    /**
     * Description placeholder
     * @date 2/21/2024 - 12:58:33 PM
     *
     * @type {string}
     */
    description: string 
}