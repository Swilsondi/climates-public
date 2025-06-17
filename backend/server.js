// Importing necessary modules
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const router = express.Router();
const cors = require("cors");

// Middleware
app.use(express.json());
//Need to install cors. npm install cors
app.use(cors());

// Importing user routes
const userRoutes = require("./routes/userRoutes");
//Importing collaboration routes
const collaborationRoutes = require("./routes/collaborationRoutes");
//Importing chat routes
const chatRoutes = require("./routes/chatRoutes");
//Importing post routes
const postRoutes = require("./routes/postRoutes");
//Importing notification routes
const notificationRoutes = require("./routes/notificationRoutes");
//Importing location routes 
const userLocations = require("./routes/userLocations");

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function startServer() {
  try {
    await mongoose.connect();
    console.log("Connected successfully to MongoDB");
    await client.db(process.env.DB_NAME).command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    app.locals.db = client.db(process.env.DB_NAME);
    // Root route for users
    app.use("/api/users", userRoutes);
    // Root route for collaborations
    app.use("/api/collaborations", collaborationRoutes);
    // Root route for chats
    app.use("/api/chats", chatRoutes);
    // Root route for posts
    app.use("/api/posts", postRoutes);
    // Root route for notifications
    app.use("/api/notifications", notificationRoutes);

    app.listen(PORT, () => {
      res.status(200).json({
        success: true,
        message: `Server is running on port ${PORT}`,
      });
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
}

startServer();
