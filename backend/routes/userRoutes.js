const router = require("express").Router();
const userController = require("../controllers/userController");

router
  .get("/", userController.getAllUsers) // Get all users
  .get("/:id", userController.getUserById) // Get user by ID
  .post("/", userController.createUser) // Create a new user
  .delete("/:id", userController.deleteUserById) // Delete a user by ID
  .put("/:id", userController.updateUserById); // Update a user by ID
module.exports = router;
