const express = require("express");
const UserController = require("./app/controllers/UserController");

const routes = require("./routes");
const cors = require("./app/middlewares/cors");
const errorHandler = require("./app/middlewares/errorHandler");

const app = express();

app.use(express.json());

app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(3001, () =>
  console.log("🚀 Server is running on port http://localhost:3001"),
);
