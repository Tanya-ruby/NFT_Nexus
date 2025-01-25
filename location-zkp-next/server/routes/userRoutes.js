const express = require("express");
const User = require("../models/User"); // Import the User model
const router = express.Router();

router.post("/storeUserData", async (req, res) => {
  try {
    const { address } = req.body;

    if (!address) {
      return res.status(400).json({ error: "Address is required" });
    }

    const savedUser = await User.create({
      address,
    });

    res.status(201).json({ message: "User data saved successfully", user: savedUser });
  } catch (error) {
    console.error("Error saving user data:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});

module.exports = router;
