import { Context } from "@azure/functions";
import { config, configParam1 } from "../config";

export async function helloText(
  context: Context,
  mode: string
): Promise<string> {
  var fromConfig;
  var message;
  switch (mode) {
    case "test1":
      fromConfig = configParam1;
      message = "configParam1 " + fromConfig
      context.log(message);
      return message;
      break;
    case "test2":
      fromConfig = "test2" //config.db.database;
      message = ("database " + fromConfig);
      context.log(message);
      return message;
      break;
    case "test3":
      fromConfig = {test: "test3"} //config.db;
      message = "configParam1 " + JSON.stringify(fromConfig)
      context.log(message);
      return message;
      break;
      default:
return "hello - nothing testing here"
    }

}
