const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const router = express.Router();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

async function startServer() {
  try {
    await mongoose.connect();
    console.log("Connected successfully to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    next(err);
  }
}

startServer();
