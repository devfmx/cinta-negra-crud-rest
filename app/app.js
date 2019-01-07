const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");


const { db } = require("./config");

const app = express();


app.use(bodyParser.json());
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use(cors());

// DB Connection

mongoose.connect(db.url, { useNewUrlParser: true });
const mongo = mongoose.connection;

mongo.on("error", (error) => console.log("Failed to connect to mongo", error))
	.once("open", () => console.log("Connected to database"));



app.get("/", (req,res) => {
	res.send("Hello World");
});


module.exports = app;