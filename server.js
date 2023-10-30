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

app.get("/", (req, res) => {
  const filePath = path.join(dirname2, "/dist/index.html");
  res.sendFile(filePath);
});

app.get("/recipe", (req, res) => {
  // const insertQuery = INSERT INTO Users (Username, Password, Email, FirstName, LastName) VALUES ('${username}', '${password}', '${email}', '${firstName}', '${lastName}');
  const getRecipes = `SELECT * FROM Recipes`;

  runQuery(getRecipes, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
});

app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
