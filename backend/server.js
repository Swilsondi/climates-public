const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
