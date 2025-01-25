const express = require("express");
const axios = require("axios");
const Groq  =  require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const router = express.Router();

router.post('/chat', async (req, res) => {
  try {
    console.log("API called: Starting POST request...");

    console.log("Parsing request body...");
    const { repoUrl, userInput, chatHistory } = req.body;
    console.log("Request body parsed:", { repoUrl, userInput, chatHistory });

    if (!repoUrl) {
      return res.status(400).json({ error: "GitHub repository URL is required" });
    }

    console.log("Fetching README content from GitHub...");
    const readmeResponse = await axios.get(`http://localhost:4000/api/fetchGithubReadme?repoUrl=https://github.com/facebook/react`);

    if (!readmeResponse || !readmeResponse.data.readmeContent) {
      return res.status(400).json({ error: "Failed to fetch README content" });
    }

    const readmeContent = readmeResponse.data.readmeContent;

    const combinedInput = `${readmeContent}\n\nUser's Question: ${userInput}`;

    console.log("Generating chat completion...");
    const chatCompletion = await getGroqChatCompletion(combinedInput, chatHistory);
    const assistantResponse = chatCompletion.choices[0]?.message?.content || "";
    console.log("Chat completion generated:", { assistantResponse });

    console.log("Returning assistant response...");
    return res.status(200).json({ assistantResponse });
  } catch (error) {
    console.error("Error in API route:", error);

    console.error("Error stack trace:", error.stack);

    return res.status(500).json({ error: "Something went wrong." });
  }
});

async function getGroqChatCompletion(combinedInput, chatHistory) {
  try {
    const messages = [
      ...chatHistory,
      {
        role: "user",
        content: combinedInput,
      },
    ];

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: messages,
    });

    return response;
  } catch (error) {
    console.error("Error in Groq chat completion:", error);
    throw new Error("Failed to generate chat completion");
  }
}

module.exports = router;
