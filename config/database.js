const database = process.env.MONGO_URI || "mongodb://localhost/cmscart";
module.exports = {
  database,
};
