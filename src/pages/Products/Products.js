import React, { useState } from "react";
import { productData } from "../../mainData.js";
import Product from "../../components/Product/Product.js";

const Products = () => {
  const [data, setData] = useState(productData);
  const [addProduct, setAddProduct] = useState(false);

  const [newProductName, setNewProductName] = useState("");
  const [newProductCategory, setNewProductCategory] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductStockQuantity, setNewProductStockQuantity] = useState("");

  const saveProduct = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
        id: data.length + 1,
        name: newProductName,
        category: newProductCategory,
        price: parseFloat(newProductPrice),
        stockQuantity: parseInt(newProductStockQuantity),
      },
    ]);
    setNewProductName("");
    setNewProductCategory("");
    setNewProductPrice("");
    setNewProductStockQuantity("");
    setAddProduct(false);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={() => setAddProduct(true)}
          >
            Add Product
          </button>
        </div>
      </div>
      {addProduct && (
        <div className="row mt-3">
          <div className="col">
            <form onSubmit={saveProduct}>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Name"
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Category"
                  value={newProductCategory}
                  onChange={(e) => setNewProductCategory(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Price"
                  value={newProductPrice}
                  onChange={(e) => setNewProductPrice(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Stock Quantity"
                  value={newProductStockQuantity}
                  onChange={(e) => setNewProductStockQuantity(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="row mt-3">
        {data.map((d) => (
          <div className="col-md-4" key={d.id}>
            <Product product={d} setData={setData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;