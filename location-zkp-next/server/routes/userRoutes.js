const express = require("express");
const User = require("../models/User"); // Import the User model
const router = express.Router();

router.post("/createUser", async (req, res) => {
  try {
    const { address } = req.body;

    if (!address) {
      return res.status(400).json({ error: "Address is required" });
    }

    const savedUser = await User.create({
      address,
    });

    res
      .status(201)
      .json({ message: "User data saved successfully", user: savedUser });
  } catch (error) {
    console.error("Error saving user data:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

router.post("/addHackathon", async (req, res) => {
  try {
    const { address, hackthone } = req.body;

    if (!address || !hackthone || !Array.isArray(hackthone)) {
      return res.status(400).json({ error: "Invalid input data" });
    }

    const user = await User.findOne({ address });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Add the hackathon to the user's existing hackthone array
    user.hackthone.push(...hackthone);

    const updatedUser = await user.save();

    res
      .status(200)
      .json({ message: "Hackathon added successfully", user: updatedUser });
  } catch (error) {
    console.error("Error adding hackathon:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

router.get("/getUser", async (req, res) => {
  try {
    const { address } = req.query;

    if (!address) {
      return res.status(400).json({ error: "Address is required" });
    }

    // Find the user by address
    const user = await User.findOne({ address });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      message: "User data fetched successfully",
      user: user,
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});


module.exports = router;
