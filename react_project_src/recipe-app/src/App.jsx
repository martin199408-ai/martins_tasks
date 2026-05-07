import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";
import Navbar from "./components/Navbar";
import RecipeDetails from "./pages/RecipeDetails";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;