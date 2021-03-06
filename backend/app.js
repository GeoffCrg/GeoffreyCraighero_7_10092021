const helmet = require("helmet");
const dotenv = require("dotenv").config();

const cors = require("cors");

const express = require("express"); // Framework pour Node.js

const path = require("path");

const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

const app = express();

// Création de la base et des tables si inexistantes

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/images", express.static(path.join(__dirname, "/images")));

var mysql = require("mysql");

var connect = mysql.createConnection({
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPassword,
});

app.use("/api/auth", userRoutes);
app.use("/api/posts", postRoutes);

module.exports = app;
