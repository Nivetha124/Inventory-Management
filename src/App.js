import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="category">Category</Link>
          </li>
          <li>
            <Link to="subcategory">Subcategory</Link>
          </li>
          <li>
            <Link to="product">Product</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* Outlet is used to render child routes */}
      <Outlet />

      {/* Example of navigating programmatically */}
      <button onClick={() => navigate("/category")}>Go to Category</button>
    </div>
  );
}