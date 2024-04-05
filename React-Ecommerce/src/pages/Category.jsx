/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

import { Product } from "../components/Product/Product";
export const Category = ({ category }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [category]);
  return (
    <div className="container my-4">
      <div className="flex flex-wrap justify-center items-center">
        {products.map((item, index) => (
          <Product key={index} productData={item} />
        ))}
      </div>
    </div>
  );
};
