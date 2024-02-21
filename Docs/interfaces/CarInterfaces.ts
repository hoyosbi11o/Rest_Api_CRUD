/**
 * Description placeholder
 * @date 2/21/2024 - 12:57:49 PM
 *
 * @export
 * @interface Car
 * @typedef {Car}
 */
export interface Car{
    /**
     * Description placeholder
     * @date 2/21/2024 - 12:57:49 PM
     *
     * @type {string}
     */
    name:string,
    /**
     * Description placeholder
     * @date 2/21/2024 - 12:57:49 PM
     *
     * @type {string}
     */
    color:string
    /**
     * Description placeholder
     * @date 2/21/2024 - 12:57:49 PM
     *
     * @type {("gasoline" | "electric")}
     */
    gas:"gasoline" | "electric"
    /**
     * Description placeholder
     * @date 2/21/2024 - 12:57:49 PM
     *
     * @type {number}
     */
    year: number
    /**
     * Description placeholder
     * @date 2/21/2024 - 12:57:49 PM
     *
     * @type {string}
     */
    description: string
    /**
     * Description placeholder
     * @date 2/21/2024 - 12:57:49 PM
     *
     * @type {number}
     */
    price: number
}