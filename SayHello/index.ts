import { AzureFunction, Context, HttpRequest } from "@azure/functions";


const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  let response = { body: "Hello from the function!", status: 200 };;

  context.res = response;
};

export default httpTrigger;