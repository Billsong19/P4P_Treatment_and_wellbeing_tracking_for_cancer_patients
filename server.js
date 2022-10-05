// Loads the configuration from config.env to process.env
require("dotenv").config({ path: "./config.env" });
const router = require("./server/router.js");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
// get MongoDB driver connection
const dbo = require("./db/conn");
const morgan = require("morgan");

const PORT = process.env.PORT || 5000;
const app = express();

//package middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

// Global error handling
app.use(function (err, _req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
// console.log(dbo.getDb());
// Set up mongoose connection
// const mongoDB = "mongodb+srv://admin:admin@cluster0.iby583t.mongodb.net/test";
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/", router);

// module.exports = { db };
