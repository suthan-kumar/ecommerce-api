const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const { PORT } = require("./constants/config");

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log("Express running on", PORT);
});
