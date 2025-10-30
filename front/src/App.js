import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Product List</h1>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {products.map((p) => (
            <li
              key={p.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                margin: "10px auto",
                width: "300px"
              }}
            >
              <strong>{p.name}</strong> — ₹{p.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
