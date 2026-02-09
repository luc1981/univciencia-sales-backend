import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config();

// Verificamos que la clave exista
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ ERROR: No encontré la GEMINI_API_KEY en el archivo .env");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY.trim());

// Usamos el modelo que ha funcionado correctamente con tu API Key
export const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });