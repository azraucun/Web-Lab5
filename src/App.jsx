import { useState } from "react";
import ProductList from "./components/ProductList.jsx";

function App() {
  const [showProducts, setShowProducts] = useState(true);

  function handleClick() {
    setShowProducts(!showProducts);
  }

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>React Product Dashboard</h1>

      <button onClick={handleClick}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;