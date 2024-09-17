import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs"; // Permet de lire/ecrire des fichiers

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
console.log("process.env.GOOGLE_API_KEY", process.env.GOOGLE_API_KEY);

export const chatbot = (req, res) => {
  return res.render("index");
};

async function run(a) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = a;

  const result = await model.generateContent(prompt);

  console.log("voici le resultat: ", result.response.text());

  const r = result;

  return r;
}

const search = async (req, res) => {
  // Afficher en console les données POST reçues
  console.log("Données reçues en POST :", req.body);

  const a = await run(req.body.message);
  console.log(a.response.text());

  // Simuler des données à passer à la vue
  const data = a.response.text();

  const question = req.body.message;

  // Rendre la vue index.ejs avec des données simulées
  return res.render("index", { question, data });
};

export default { chatbot, search };
