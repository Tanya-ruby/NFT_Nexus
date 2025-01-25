const express = require("express");
const axios = require("axios");

const router = express.Router();

// Endpoint to fetch GitHub README
router.get("/fetchGithubReadme", async (req, res) => {
  try {
    const { repoUrl } = req.query; // The GitHub repository URL passed as query parameter
    
    if (!repoUrl) {
      return res.status(400).json({ error: "GitHub repository URL is required" });
    }

    // Extracting the username and repository name from the URL
    const regex = /https:\/\/github\.com\/([^\/]+)\/([^\/]+)/;
    const match = repoUrl.match(regex);

    if (!match) {
      return res.status(400).json({ error: "Invalid GitHub repository URL" });
    }

    const username = match[1];
    const repoName = match[2];

    // GitHub API URL to fetch the README file
    const apiUrl = `https://api.github.com/repos/${username}/${repoName}/readme`;

    // Fetching the README file from GitHub
    const response = await axios.get(apiUrl, {
      headers: {
        "Accept": "application/vnd.github.v3.raw", // To get the raw content
      }
    });

    // Returning the README content
    res.status(200).json({ readmeContent: response.data });
  } catch (error) {
    console.error("Error fetching README:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});

module.exports = router;
