import React from "react";
import { productData, orderData } from "../../mainData.js";
import { Link } from "react-router-dom";
import "./styles.css";

const Dashboard = () => {
  const totalProducts = productData.length;
  const totalOrders = orderData.length;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <h2>Dashboard</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Key Metrics</h3>
          <p>Total Number of Products: {totalProducts}</p>
          <p>Total Number of Orders: {totalOrders}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Link to="/Products" className="btn btn-primary mr-2">
            Products
          </Link>
          <Link to="/Orders" className="btn btn-primary">
            Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
