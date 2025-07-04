// Importing necessary modules
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const helmet = require("helmet");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

// Middleware
app.use(express.json());

// TODO: to install cors. npm install cors and helmet on mac
// TODO: fix routes
// TODO: to take make logic for routes in controllers
// TODO: to create models for each route
// TODO: to install bcrpyt on windows
// TODO: to install jsonwebtoken on windows

// Security middleware
app.use(helmet());
app.use(cors());
app.use(errorHandler);
app.use(notFound);

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
const locationRoutes = require("./routes/locationRoutes");

const mongoose = require("mongoose");

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    // Root route for users
    app.use("/api/v1/users", userRoutes);
    // Root route for collaborations
    app.use("/api/v1/collaborations", collaborationRoutes);
    // Root route for chats
    app.use("/api/v1/chats", chatRoutes);
    // Root route for posts
    app.use("/api/v1/posts", postRoutes);
    // Root route for notifications
    app.use("/api/v1/notifications", notificationRoutes);
    // Root route for locations
    app.use("/api/v1/locations", locationRoutes);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
}

startServer();
