const express = require("express");
const morgan = require("morgan");
const port = 3000;
const app = express();

app.use(morgan('dev'));

app.get("/", (req, res) => {
	res.send("Home");
});

app.get("/about", (req, res) => {
	res.send("About");
});

app.listen(port, () => {
	console.log("Server is running");
});
