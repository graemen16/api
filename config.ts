const fs = require('fs');
const dotenv=require('dotenv').config();
export const config = {
    db: {
      host: (process.env.DB_HOST || ''),
      user: (process.env.DB_USERNAME || ''),
      password: (process.env.DB_PASSWORD || ''),
      database: (process.env.DB_DATABASE || ''),
      ssl  : {
        ca : fs.readFileSync(process.env.MYSQL_ATTR_SSL_CA || '')
      }
    },
    listPerPage: 10,
  };
 export const configParam1 = process.env.DB_USERNAME;
 export const configParam2 = "just a string";
