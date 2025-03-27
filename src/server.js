import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "API is running" });
});

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at ${port} port`);
});
