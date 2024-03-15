import React, { useState } from "react";
import { orderData } from "../../mainData";

const Orders = () => {
  const [orders, setOrder] = useState(orderData);

  return (
    <div className="container mt-4">
      {orders.map((order) => (
        <div key={order.orderId} className="card mb-3">
          <div className="card-body">
            <p className="card-text">Order ID: {order.orderId}</p>
            <p className="card-text">Customer Name: {order.customerName}</p>
            <p className="card-text">Order Date: {order.orderDate}</p>
            <p className="card-text">Status: {order.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
