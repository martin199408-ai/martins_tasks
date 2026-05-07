import { useState } from "react";

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3001/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, image, description }),
    });

    setTitle("");
    setImage("");
    setDescription("");
    alert("Recipe added!");
  };

  return (
    <div className="form-container">
      <h2>Add Recipe</h2>

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

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddRecipe;