import { GoogleGenAI } from "@google/genai";

export async function getWeatherInsights(weatherData: any, location: string) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) return "API Key missing.";
  const ai = new GoogleGenAI({ apiKey });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ role: "user", parts: [{ text: `Analyze this weather data for ${location} and provide a brief insight. Data: ${JSON.stringify(weatherData)}` }] }],
    });
    return response.text;
  } catch (error) {
    return "Insights unavailable.";
  }
}

// Add your editImage and upscaleImage functions here as well 
