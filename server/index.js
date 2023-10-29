import express from "express";
import { launch } from "./interface.js";

const app = express();
app.use(express.json());

app.get("/classify", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const output = await launch();

  // Send the JSON response
  res.end(JSON.stringify(output));
  // res.send("jo");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
