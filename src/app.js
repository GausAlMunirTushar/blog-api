const express = require("express");
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDoc = YAML.load("./my-blog-1-swagger.yaml");
const dotenv = require("dotenv");
dotenv.config();

// express app
const app = express();
app.use(express.json());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.get("/health", (_req, res) => {
	res.status(200).json({
		health: "OK",
	});
});

let connectionURL = process.env.DB_CONNECTION_URL;
mongoose
	.connect(connectionURL)
	.then(() => {
		console.log("database connection success");
		app.listen(9090, async () => {
			console.log("server is listening on port 9000");
			const user = new User({
				name: "tushar",
				email: "tushar@gmail.com",
				password: "tushar",
			});
			await user.save();
		});
	})
	.catch((error) => {
		console.error("Error connecting to database:", error);
	});
