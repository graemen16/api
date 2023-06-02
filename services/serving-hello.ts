import { Context } from "@azure/functions";
import { config } from "../config";

export async function helloText(context: Context): Promise<string> {
    const someText = process.env.HOST;
    context.log("saying Hello from Graeme's function : " + someText)
    var var1 = config.db.database
    
    //context.log(config.db)
    return "Hello from Graeme's function"
}