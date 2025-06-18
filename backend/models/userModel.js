const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    passwordHash: {
      type: String,
      required: true,
      select: false,
    },
    bio: {
      type: String,
      maxlength: 300,
    },
    skills: [String], // ["audio engineer", "rapper", "videographer"]
    interests: [String], // for swipe matching
    status: {
      type: String,
      enum: ["unverified", "verified", "official"],
      default: "unverified",
    },
    profileImage: {
      type: String, // S3 URL
    },
    bannerImage: {
      type: String, // Optional
    },
    location: {
      city: String,
      state: String,
      country: String,
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
    socialLinks: {
      instagram: String,
      tiktok: String,
      x: String,
      youtube: String,
      linkedin: String,
      website: String,
    },
    collaborators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // References matched users
      },
    ],
    mediaPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MediaPost",
      },
    ],
    notifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notification",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
