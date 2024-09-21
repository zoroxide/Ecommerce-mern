import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Products</h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className="col-md-3 mb-3"
              onClick={() => handleProductClick(product._id)}
            >
              <div className="card h-100">
                <img
                  src={product.imageURL}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">${product.price}</p>
                  <p className="card-text">
                    {product.stock ? "In Stock" : "Out of Stock"}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleProductClick(product._id)}
                  >
                    Read More ...
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
