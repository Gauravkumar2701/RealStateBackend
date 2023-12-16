import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connect from "./db/db.js";
const app = express();

connect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
