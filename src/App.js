import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import Footer from "./Navigation/Footer";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ color, category, newPrice, title }) =>
          category === selected ||
          color === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <div className="actions">
        <select>
          <option value="pricedesc">Sort by descending price</option>
          <option value="priceasc"> Sort by ascending price</option>
          <option value="alphabeticalaz"> Sort alphabetical a-z</option>
          <option value="alphabeticalza"> Sort alphabetical z-a</option>
        </select>
      </div>
      <Products result={result} />
      <Footer />
    </>
  );
}

export default App;
