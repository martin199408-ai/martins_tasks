import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/recipes/${id}`)
      .then((res) => res.json())
      .then(setRecipe);
  }, [id]);

  const deleteRecipe = async () => {
    await fetch(`http://localhost:3001/recipes/${id}`, {
      method: "DELETE",
    });

    navigate("/");
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>

      {recipe.image && (
        <img className="recipe-image" src={recipe.image} alt={recipe.title} />
      )}

      <p style={{ whiteSpace: "pre-line" }}>{recipe.description}</p>

      <div className="details-buttons">
        <Link className="edit-btn" to={`/edit/${recipe.id}`}>
          Edit
        </Link>

        <button className="delete-btn" onClick={deleteRecipe}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default RecipeDetails;