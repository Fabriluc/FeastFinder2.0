import express from "express";
import path from "path";
import runQuery from "./DatabaseConnection.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const filename = fileURLToPath(import.meta.url);
const dirname2 = dirname(filename);

console.log(dirname2);

const app = express();

app.use(express.static("dist"));

// app.use(express.static(path.join(__dirname, "dist")));

// Add a route handler for serving the React index.html
app.get("/", (req, res) => {
  const filePath = path.join(dirname2, "/dist/index.html");
  res.sendFile(filePath);
});

app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
