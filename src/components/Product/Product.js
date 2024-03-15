import React, { useState } from "react";

const Product = ({ product, setData }) => {
  const [edit, setEdit] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);

  const handleDelete = () => {
    setData((prevData) => prevData.filter((item) => item.id !== product.id));
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    // Update the product in the data array
    setData((prevData) =>
      prevData.map((item) =>
        item.id === editedProduct.id ? editedProduct : item
      )
    );
    // Exit edit mode
    setEdit(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  return (
    <div className="card">
      <div className="card-body">
        {edit ? (
          <>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={editedProduct.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                className="form-control"
                name="category"
                value={editedProduct.category}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                name="price"
                value={editedProduct.price}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Stock</label>
              <input
                type="text"
                className="form-control"
                name="stockQuantity"
                value={editedProduct.stockQuantity}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary mr-2" onClick={handleSave}>
              Save
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setEdit(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">Category: {product.category}</p>
            <p className="card-text">Price: ${product.price}</p>
            <p className="card-text">Stock Quantity: {product.stockQuantity}</p>
            <button className="btn btn-primary mr-2" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
