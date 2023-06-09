const express = require("express");
const dotenv = require("dotenv").config();
const dashboardController = require("./router/dashboardRoute");
const loginRoute = require("./router/loginRoute");

const app = express();

const PORT = process.env.PORT || 3500;

app.use(express.json());

app.use("/dashboard", dashboardController);

app.use("/", loginRoute);

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});
