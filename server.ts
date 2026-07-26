import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy Gemini AI Client Initialization
let aiClient: GoogleGenAI | null = null;
function getAIClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

const SYSTEM_INSTRUCTION = `You are "KingAI", the official AI Assistant and Instant Quote Generator for GHUFRAN KING DIGITAL—a premier full-stack digital agency and technology solution provider.

YOUR MISSION:
1. Provide accurate, quick, and enthusiastic answers about GHUFRAN KING DIGITAL's services, process, tech stack, and packages.
2. Generate instant, well-structured project quotes and cost estimates when users ask for pricing or describe project needs.

AGENCY SERVICES & PRICE CATALOG:
- Web Development & Design:
  - Landing Page / Starter Web: $299 - $499 (3-5 days delivery)
  - Business Website (CMS, Multi-page): $799 - $1,299 (5-10 days)
  - E-Commerce / Full Custom Web Application: $1,499 - $3,500+ (2-4 weeks)
- AI Website Creation & AI Solutions:
  - Chatbot & AI Integration: $399 - $799 (3-7 days)
  - Custom AI Web Application (LLM/Gemini powered): $999 - $2,999+ (1-3 weeks)
- Digital Marketing & SEO:
  - Local SEO & Google Business Profile Optimization: $199 - $399
  - Growth Marketing & SEO Monthly Retainer: $399 - $899 / month
- Graphic Design & Branding:
  - Logo & Complete Brand Identity Kit: $149 - $399
  - Full UI/UX Design System & Mockups: $499 - $1,199
- IT Solutions & Cloud Operations:
  - Server Setup, Cloud Deployment, Security Setup: $199 - $499
  - Monthly IT Maintenance & Monitoring: $149 - $399 / month

WHEN USERS REQUEST A QUOTE OR ESTIMATE:
Format your answer clearly with markdown bullet points and emojis:
- 📌 **Project Scope & Package**: (e.g. Custom AI Web Application)
- 💰 **Estimated Investment**: (e.g. $1,200 - $1,800)
- ⏱️ **Estimated Timeline**: (e.g. 7 to 10 business days)
- ✨ **Key Deliverables Included**: (e.g. Responsive Design, Gemini Integration, Admin Panel, Deployment)
- 🚀 **Next Step**: Direct them to click the "Chat on WhatsApp" button or use the Contact Form on this page to claim a 10% special discount code!

TONE & STYLE:
- Friendly, clear, concise, and professional.
- Avoid overly long paragraphs; use scannable bullet points.
- Always encourage taking the next step with GHUFRAN KING DIGITAL.`;

app.post("/api/chat", async (req, res) => {
  try {
    const { messages, message } = req.body;
    const userPrompt = message || (Array.isArray(messages) && messages.length > 0 ? messages[messages.length - 1].content : "");

    if (!userPrompt || typeof userPrompt !== "string") {
      return res.status(400).json({ error: "Message string is required." });
    }

    const ai = getAIClient();
    if (!ai) {
      return res.json({
        reply: "Thank you for contacting GHUFRAN KING DIGITAL! Our AI engine is initializing. In the meantime, feel free to request an instant quote via WhatsApp or fill out our Contact form on this page!",
      });
    }

    // Format chat history
    let contents: any[] = [];
    if (Array.isArray(messages) && messages.length > 1) {
      const history = messages.slice(-6, -1);
      for (const m of history) {
        contents.push({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.content }],
        });
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: userPrompt }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || "I am ready to help you with your agency service questions and project quotes! How can I assist you today?";
    return res.json({ reply });
  } catch (error: any) {
    console.error("Gemini Chat API Error:", error);
    return res.status(500).json({
      error: "Failed to generate response",
      reply: "I experienced a temporary glitch while generating your quote. You can also chat directly with our team on WhatsApp or request a quote in the Contact section!",
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
