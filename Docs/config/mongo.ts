/**
import "dotenv/config"
import { connect } from "mongoose"


 * Description placeholder
 * @date 2/21/2024 - 12:37:19 PM
 *
 * @async
 * @returns {Promise<void>}

async function dbConnection(): Promise<void>{
    const DB_URI= <string>process.env.DB_URI
    await connect(DB_URI)
}

export default dbConnection
 */