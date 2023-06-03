import { Context } from "@azure/functions";
//import { config, configParam1, configParam2 } from "../config";
import { conf2 } from "../config2";

export async function helloText(
  context: Context,
  mode: string
): Promise<string> {
  var fromConfig;
  var message;
  switch (mode) {
    case "test1":
      fromConfig = conf2.db_string
      message = "test1 : " + fromConfig
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
