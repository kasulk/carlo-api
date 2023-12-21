import express from "express";
import { data } from "../data/artpieces.js";

const app = express();

app.get("/", (req, res) => {
  res.json(data);
});

//! for development only
app.listen(5000, () => console.log(`Carlo REST API running on port 5000`));

export default app;
