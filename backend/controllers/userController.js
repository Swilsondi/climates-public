const User = require("../models/User");

// Controller for user-related operations
exports.getAllUsers = async (req, res, next) => {
  // Get all users
  try {
    const users = await User.find();
    // Fetch all users from the database
    res.status(200).json({
      success: true,
      data: users,
      message: "Users retrieved successfully",
    });
  } catch (err) {
    next(err);
  }
};

// Get user by ID
exports.getUserById = async (req, res, next) => {
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
      success: true,
      data: user,
      message: "User retrieved successfully by ID",
    });
  } catch (err) {
    next(err);
  }
};

// Create a new user
exports.createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body); // Saves the new user to the database
    res.status(201).json({
      success: true,
      data: newUser,
      message: "User created successfully",
    });
  } catch (err) {
    next(err);
  }
};

// Delete user by ID
exports.deleteUserById = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        error: "No user found with the provided ID",
      });
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

// Update user by ID
exports.updateUserById = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User can not be found",
        data: updatedUser,
      });
    }
    res.status(200).json({
      success: true,
      data: updatedUser,
      message: "User updated successfully",
    });
  } catch (err) {
    next(err);
  }
};
