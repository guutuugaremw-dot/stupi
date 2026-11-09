import express from "express";
import { port, mongoDBURL} from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
 

mongoose.connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });