import * as mysql from "mysql2/promise.js";
//import { config } from "../config";
import { conf2 } from "../config2"


export async function query(sql: string, params?: any) {
  //console.log(config.db);
  const connection_str = conf2.db_string;
  //const connection = await mysql.createConnection(config.db);
  const connection = await mysql.createConnection(connection_str);
  const [results] = await connection.execute(sql, params);

  return results;
}
export async function getConnection():Promise<mysql.Connection>{
  const connection_str = conf2.db_string;
  //return await mysql.createConnection(config.db);
  return await mysql.createConnection(connection_str);
}
export function closeConnection(conn:mysql.Connection){
  conn.end
}
export async function queryConn(conn:mysql.Connection, sql: string, params?: any){
  const [results] = await conn.execute(sql, params);
  return results;
}
export async function queryMultiplesConn(conn:mysql.Connection, sql: string, params?: any){
  const [results] = await conn.query(sql, params);
  return results;
}

