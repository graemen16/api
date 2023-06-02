import { Context } from "@azure/functions";

export async function helloText(context: Context): Promise<string> {
    context.log("saying Hello from Graeme's function")
    return "Hello from Graeme's function"
}