import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemIype, OrderType } from "../../styles/types";
import { Link } from "react-router-dom";

// Sample order items
const orderItems: OrderItemIype[] = [
  {
    name: "puma shoes",
    quantity: 2,
    price: 1000,
    photo:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTAp7qFXOdCuXbeEaI6mgU0zKKAiUi6n-0p6UrZZ4hvOSuvRNySRsHp03nCxVzUzMEeZOONCCQBJeP6MszHtAw1WXCrKb7fLzopUbbP-Dc9kINy1IUsXa74y2TB&usqp=CAU",
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "shailesh Jadav",
    email: "kWQp3@example.com",
    address: {
      street: "Halvad",
      city: "Morbi",
      state: "Gujarat",
      country: "India",
      pincode: 363330,
      phone: "9876543210",
    },
    status: "processing",
    subtotal: 100,
    discount: 10,
    tax: 10,
    total: 100,
    orderItems: orderItems,
    _id: "bivhufujvu",
  });

  const { name, email, address, status, subtotal, discount, tax, total, _id } =
    order;

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">
        <section>
          <h2>Order Item</h2>
          {orderItems.map((item, index) => (
            <OrderItemCard key={index} {...item} _id={_id} />
          ))}
        </section>
      </main>
    </div>
  );
};

// Define OrderItemCard component and pass _id as prop
const OrderItemCard = ({
  name,
  photo,
  quantity,
  price,
  _id,
}: OrderItemIype & { _id: string }) => {
  return (
    <div className="transaction-product-card">
      <img src={photo} alt={name} />
      <Link to={`/product/${_id}`}>{name}</Link>
      <p>Quantity: {quantity}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default TransactionManagement;
