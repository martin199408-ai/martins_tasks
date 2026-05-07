import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <h2 className="title">Нашите рецепти</h2>

      <div className="menu-container">
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰ Menu
        </button>

        {open && (
          <div className="dropdown">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link to="/add" onClick={() => setOpen(false)}>
              Add
            </Link>

            {user ? (
              <>
                <span className="user-email">{user.email}</span>
                <button onClick={logout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)}>
                  Login
                </Link>

                <Link to="/register" onClick={() => setOpen(false)}>
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;