import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Laptop", price: 75000 },
  { id: 2, name: "Headphones", price: 3500 },
  { id: 3, name: "Keyboard", price: 1200 }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("Backend server running on port 5000");
});
