const fs = require('fs');
const dotenv=require('dotenv').config();
export const config = {
    db: {
      host: (process.env.HOST || ''),
      user: (process.env.DB_USERNAME || ''),
      password: (process.env.PASSWORD || ''),
      database: (process.env.DATABASE || ''),
      ssl  : {
        ca : fs.readFileSync(process.env.MYSQL_ATTR_SSL_CA || '')
      }
    },
    listPerPage: 10,
  };
 