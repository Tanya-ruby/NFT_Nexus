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
    const readmeResponse = await axios.get(`http://localhost:4000/api/fetchGithubReadme?repoUrl=${repoUrl}`);

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
        role: "system",
        content: `You are a knowledgeable chatbot designed to assist users with their questions based on the README documentation of GitHub repositories. Your focus is on explaining topics related to cryptocurrency, especially Aptos, in a clear, concise, and friendly manner. When responding, make sure to reference relevant sections of the README to explain concepts and features effectively. Aim to provide detailed yet easy-to-understand answers, breaking down complex crypto concepts into digestible explanations. Your tone should be informative but approachable, helping users understand the technical aspects while offering them guidance on how they can use the project. Keep each response to around 175 words, ensuring that you address the user's inquiry with clarity and precision. give short and crisp informative responses`
    },
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
