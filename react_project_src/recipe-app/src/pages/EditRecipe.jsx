import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setImage(data.image || "");
        setDescription(data.description);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:3001/recipes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, image, description }),
    });

    navigate(`/recipe/${id}`);
  };

  return (
    <div className="form-container">
      <h2>Edit Recipe</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <textarea
          placeholder="Description / Products"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditRecipe;