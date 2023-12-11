const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({
  path: "./.env",
});
let PORT = process.env.PORT;
//MongoDB Connection
mongoose
  .connect(process.env.MONGODB_LOCAL)
  .then(() => {
    console.log("DB is Connected");
  })
  .catch((err) => {
    console.log(err);
  });
let server = http.createServer(app);
server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`server is running on port${PORT}...`);
});
