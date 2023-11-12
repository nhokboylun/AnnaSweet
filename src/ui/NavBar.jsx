import Button from "./Button";
import StoreName from "../images/Logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Navbar() {
  const loginValid = useSelector((state) => state.user.username).length !== 0;
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <nav className="flex flex-col items-center justify-center px-6 py-4">
      <Link to="/">
        <img
          className="mb-2 h-48 w-48 rounded-full"
          src={StoreName}
          alt="Store Name"
        />
      </Link>
      <ul className="flex space-x-1 sm:space-x-3">
        <li>
          <Button type="sm" to="/Home">
            Home
          </Button>
        </li>
        <li>
          <Button type="sm" to="/About">
            About
          </Button>
        </li>
        <li>
          <Button type="sm" to="/Contact">
            Contact
          </Button>
        </li>
        <li>
          {loginValid ? (
            <Button type="callToAction" to="/Logout">
              Sign Out
            </Button>
          ) : (
            <Button type="callToAction" to="/Login">
              Sign In
            </Button>
          )}
        </li>
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search order #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="my-2 rounded-full px-2 py-2"
        />
      </form>
    </nav>
  );
}

export default Navbar;
