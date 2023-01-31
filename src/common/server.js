const dotenv = require('dotenv');

dotenv.config();
//{ path:`./.env.${NODE_ENV}` }
module.exports = {
  SERVER_PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV
};