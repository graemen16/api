import * as mysql from "mysql2/promise.js";
import { config } from "../config";


export async function query(sql: string, params?: any) {
  console.log(config.db);
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute(sql, params);

  return results;
}
export async function getConnection():Promise<mysql.Connection>{
  return await mysql.createConnection(config.db);
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

