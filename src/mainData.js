const productData = [
  {
    id: 1,
    name: "Product 1",
    category: "Category 1",
    price: 10,
    stockQuantity: 100,
  },
  {
    id: 2,
    name: "Product 2",
    category: "Category 2",
    price: 20,
    stockQuantity: 150,
  },
  {
    id: 3,
    name: "Product 3",
    category: "Category 1",
    price: 15,
    stockQuantity: 200,
  },
  {
    id: 4,
    name: "Product 4",
    category: "Category 3",
    price: 25,
    stockQuantity: 120,
  },
];

const orderData = [
  {
    orderId: 1,
    customerName: "John Doe",
    orderDate: "2024-03-10",
    status: "Pending",
  },
  {
    orderId: 2,
    customerName: "Jane Smith",
    orderDate: "2024-03-09",
    status: "Shipped",
  },
  {
    orderId: 3,
    customerName: "Alice Johnson",
    orderDate: "2024-03-08",
    status: "Delivered",
  },
  {
    orderId: 4,
    customerName: "Bob Brown",
    orderDate: "2024-03-07",
    status: "Cancelled",
  },
];

export { productData, orderData };
