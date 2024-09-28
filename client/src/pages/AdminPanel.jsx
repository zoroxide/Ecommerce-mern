// src/pages/AdminPanel.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null); // State to store the product being edited
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    stock: true,
    quantity: '1',
    description: '',
    imageURL: ''
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products from the backend
  const fetchProducts = () => {
    axios.get('http://localhost:5000/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  // Add a new product
  const handleAddProduct = () => {
    axios.post('http://localhost:5000/products', newProduct)
      .then(() => {
        fetchProducts();
        setNewProduct({ name: '', price: '', stock: true, quantity: '', description: '', imageURL: '' });
      })
      .catch((error) => {
        console.error('Error adding product:', error);
      });
  };

  // Delete a product
  const handleDeleteProduct = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`)
      .then(() => {
        fetchProducts();
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };

  // Set the product to be edited
  const handleEditProduct = (product) => {
    setEditingProduct(product); // Set the product in the state
  };

  // Handle changes to the product being edited
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Update the product
  const handleUpdateProduct = () => {
    axios.put(`http://localhost:5000/products/${editingProduct._id}`, editingProduct)
      .then(() => {
        fetchProducts();
        setEditingProduct(null); // Reset the editing state after saving
      })
      .catch((error) => {
        console.error('Error updating product:', error);
      });
  };

  // Handle form changes for new products
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  return (
    <div className="container mt-5">
      <h1>Admin Panel</h1>

      {/* Add Product Form */}
      <h3 className="mt-4">Add New Product</h3>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" name="name" value={newProduct.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input type="text" className="form-control" name="price" value={newProduct.price} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Stock</label>
        <select className="form-control" name="stock" value={newProduct.stock} onChange={handleChange}>
          <option value={true}>In Stock</option>
          <option value={false}>Out of Stock</option>
        </select>
      </div>
      <div className="from-group" >
        <label>Quantity</label>
        <input type='number' className='from-control' name='quantity' value={newProduct.quantity} onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea className="form-control" name="description" value={newProduct.description} onChange={handleChange}></textarea>
      </div>
      <div className="form-group">
        <label>Image URL</label>
        <input type="text" className="form-control" name="imageURL" value={newProduct.imageURL} onChange={handleChange} />
      </div>
      <button className="btn btn-primary mt-3" onClick={handleAddProduct}>Add Product</button>

      {/* Product List */}
      <h3 className="mt-5">Products List</h3>
      <table className="table table-bordered mt-3">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>quantity</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.stock ? 'In Stock' : 'Out of Stock'}</td>
              <td>{product.stock ? product.quantity : 0}</td>
              <td>{product.description}</td>
              <td><img src={product.imageURL} alt={product.name} style={{ width: '100px' }} /></td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                <button className="btn btn-warning ml-2" onClick={() => handleEditProduct(product)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Product Form */}
      {editingProduct && (
        <div className="mt-5">
          <h3>Edit Product</h3>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" name="name" value={editingProduct.name} onChange={handleEditChange} />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input type="text" className="form-control" name="price" value={editingProduct.price} onChange={handleEditChange} />
          </div>
          <div className="form-group">
            <label>Stock</label>
            <select className="form-control" name="stock" value={editingProduct.stock} onChange={handleEditChange}>
              <option value={true}>In Stock</option>
              <option value={false}>Out of Stock</option>
            </select>
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input type="number" className="form-control" name="quantity" value={editingProduct.quantity} onChange={handleEditChange} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" name="description" value={editingProduct.description} onChange={handleEditChange}></textarea>
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input type="text" className="form-control" name="imageURL" value={editingProduct.imageURL} onChange={handleEditChange} />
          </div>
          <button className="btn btn-success mt-3" onClick={handleUpdateProduct}>Update Product</button>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
