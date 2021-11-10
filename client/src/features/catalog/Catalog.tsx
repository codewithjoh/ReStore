import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

// destructure properties from props
export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []); // [] empty array of dependencies allows for this to only be called once - without it, it would be called each time component renders

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
