import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function run() {
  const model = genAI.getGenerativeModel({
    model: "models/gemini-3-flash-preview",
  });

  const result = await model.generateContent(
    "Explain React in one simple paragraph.",
  );

  const response = result.response;
  console.log(response.text());
}

run();
