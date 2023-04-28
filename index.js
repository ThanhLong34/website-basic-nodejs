const express = require("express");
const morgan = require("morgan");
const port = 3000;
const app = express();

app.use(morgan('dev'));

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.get("/home", (req, res) => {
	res.send("Home");
});

app.listen(port, () => {
	console.log("Hello");
});
