import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { helloText } from "../services/serving-hello";


const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  let body  = await helloText(context);
  //let body = "hello"
  let response = { body: body, status: 200 };;
  context.log("just saying hello...")

  context.res = response;
};

export default httpTrigger;