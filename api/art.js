import express from "express";
import { data } from "../data/artpieces";

const app = express();

app.get("/", (req, res) => {
  res.json(data);
});

export default app;
