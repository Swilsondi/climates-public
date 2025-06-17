const User = require("../models/User");

// Controller for user-related operations
exports.getAllUsers = async (req, res, next) => {
  // Get all users
  try {
    const users = await User.find();
    // Fetch all users from the database
    res.status(200).json({
      success: "success",
      data: users,
      message: "Users retrieved successfully",
    });
  } catch (err) {
    next(err);
  }
};

// Get user by ID
exoorts.getUserId = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        error: "No user found with the provided ID",
      });
    }
    res.status(200).json({
      success: "success",
      data: user,
      message: "User retrieved successfully by ID",
    });
  } catch (err) {
    next(err);
  }
};
