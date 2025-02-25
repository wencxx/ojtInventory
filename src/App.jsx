import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./FldrLayout/layout";
import Home from "./FldrPages/home";
import Products from "./FldrPages/products";
import { useEffect } from "react";
import { useProductStore } from "./FldrStore/product-store";

function App() {
  const store = useProductStore()

  useEffect(() => {
      store.getProducts()
  }, [])

  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;