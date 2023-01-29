import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 80;

app.listen(port);

app.get("/", (req, res) => {
  res.send("hello from api");
});
