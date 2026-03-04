import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));   // 👈 ADD THIS

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a medical assistant. Add disclaimer: This is not medical advice." },
      { role: "user", content: userMessage }
    ],
  });

  res.json({ reply: response.choices[0].message.content });
});

app.listen(5000, () => console.log("Server running on port 5000"));