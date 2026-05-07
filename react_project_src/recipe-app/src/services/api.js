export const getRecipes = async () => {
  const res = await fetch("http://localhost:3001/recipes");
  return res.json();
};