
import OpenAI from "openai";

const client = new OpenAI({
apiKey: process.env.OPENAI_API_KEY
  dangerouslyAllowBrowser: true, // ⚠️ uniquement pour test côté client
});

export async function generateRecipe(prompt) {
  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      { role: "system", content: "Tu es un chef astrologique. Réponds uniquement en JSON avec les clés: nom, ingrédients, énergie, saison, astrologie." },
      { role: "user", content: prompt },
    ],
  });

  return response.choices[0].message.content;
}

