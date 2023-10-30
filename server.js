import express from "express";
import path from "path";
import bodyParser from "body-parser";
import runQuery from "./DatabaseConnection.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cors from "cors";

const filename = fileURLToPath(import.meta.url);
const dirname2 = dirname(filename);

const app = express();

app.use(express.static("dist"));
app.use(express.json());
app.use(cors());

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

app.get("/", (req, res) => {
  const filePath = path.join(dirname2, "/dist/index.html");
  res.sendFile(filePath);
});

app.get("/api/recipes", (req, res) => {
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

app.get("/api/recipes/:title", (req, res) => {
  const { title } = req.params;
  const getRecipe = `SELECT * FROM Recipes WHERE title = '${title}'`;
  runQuery(getRecipe, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
});

app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;
  const insertContact = `INSERT INTO ContatForm (name, email, phone, message) VALUES ('${name}', '${email}', '${phone}', '${message}')`;

  runQuery(insertContact, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
      console.log(results);
    }
  });
});

app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
