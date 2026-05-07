import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecipes } from "../services/api";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then(setRecipes);
  }, []);

  return (
    <div className="recipes">
      <h2>Рецепти</h2>

      {recipes.map((r) => (
        <div className="recipe-item" key={r.id}>
          {r.image && <img src={r.image} alt={r.title} />}

          <Link to={`/recipe/${r.id}`}>
            <h3>{r.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;