import { useState } from "react";
import ProductList from "./components/ProductList.jsx";

function App() {
  const [showProducts, setShowProducts] = useState(true);
  const [name, setName] = useState("");

  function handleClick() {
    setShowProducts(!showProducts);
  }

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>React Product Dashboard</h1>

      <button onClick={handleClick}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      <div style={{ marginTop: "16px" }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <p>Hello, {name}</p>

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;