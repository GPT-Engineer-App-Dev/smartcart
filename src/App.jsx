import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route exact path="/" element={<Index searchQuery={searchQuery} />} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;