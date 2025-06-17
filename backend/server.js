// Importing necessary modules
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const router = express.Router();
const cors = require("cors");

// Importing user routes
const userRoutes = require("./routes/userRoutes");
//Importing collaboration routes
const collaborationRoutes = require("./routes/collaborationRoutes");
// Middleware
app.use(express.json());
app.use(cors());

// Root route for users
app.use("/api/users", userRoutes);

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function startServer() {
  try {
    await mongoose.connect();
    console.log("Connected successfully to MongoDB");
    app.listen(PORT, () => {
      res.status(200).json({
        success: true,
        message: `Server is running on port ${PORT}`,
      });
    });
  } catch (err) {
    next(err);
  }
}

startServer();
