import { GoogleGenAI } from "@google/genai";
import { MOCK_MATCHES, MOCK_PLAYERS, TICKET_INFO } from "../constants";

let ai: GoogleGenAI | null = null;

const getAI = () => {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }
  return ai;
};

export const generateResponse = async (userPrompt: string): Promise<string> => {
  try {
    const client = getAI();
    
    // Construct context from mock data
    const context = `
      You are an AI assistant for the Chelsea FC Women's website mobile clone.
      Use the following data to answer user questions.
      
      MATCHES:
      ${JSON.stringify(MOCK_MATCHES)}
      
      SQUAD:
      ${JSON.stringify(MOCK_PLAYERS)}
      
      TICKET INFO:
      ${JSON.stringify(TICKET_INFO)}
      
      If the user asks something not in the data, politely say you only have access to the current demo data.
      Keep answers concise and helpful for a mobile user.
    `;

    const response = await client.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: context }] },
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
    });

    return response.text || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the AI service right now. Please check your API Key.";
  }
};