
import { useState } from "react";
import { generateRecipe } from "../services/openai";

export default function RecipeCard() {
  const [recette, setRecette] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleViewRecipe = async () => {
  setLoading(true);
  try {
    const response = await fetch("http://localhost:3001/api/recette", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "Crée une recette tropicale avec açaí et guarana" }),
    });
    const data = await response.json();
    setRecette(data);
  } catch (error) {
    console.error("Erreur :", error);
  } finally {
    setLoading(false);
  }
};

  

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-2">Chef IA Rio</h2>
      <div className="flex gap-4">
        <button className="btn" onClick={handleViewRecipe} disabled={loading}>
          {loading ? "Chargement..." : "☉ Voir la Recette"}
        </button>
      </div>

      {recette && (
        <div className="mt-6 p-4 bg-slate-100 rounded text-slate-900">
          <h3 className="text-lg font-bold mb-2">{recette.nom}</h3>
          <ul className="list-disc pl-5 mb-2">
            {recette.ingrédients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p><strong>Énergie :</strong> {recette.énergie}</p>
          <p><strong>Saison :</strong> {recette.saison}</p>
          <p><strong>Astrologie :</strong> {recette.astrologie}</p>
        </div>
      )}
    </div>
  );
}
