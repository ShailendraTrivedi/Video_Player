require("dotenv").config();

const { MONGODB_COMPASS, PORT } = process.env;

module.exports = {
  MONGODB_COMPASS,
  PORT,
};
