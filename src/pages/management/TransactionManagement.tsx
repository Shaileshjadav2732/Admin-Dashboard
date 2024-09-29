import { useState } from "react";
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
    shippingcharges: 0,
  });

  const {
    name,
    email,
    address,
    status,
    subtotal,
    discount,
    tax,
    total,
    _id,
    shippingcharges,
  } = order;

const updateHandler=()=>{
  setOrder({
    ...order,
    status:status==="processing"?"shipped":"delivered",
  });
}

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

        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>
            Address: {`${address.street}, ${address.city}, ${address.state}`}
          </p>
          <h5>Amount Info</h5>
          <p>subTotal : {subtotal}</p>
          <p>Shipping charges : {shippingcharges}</p>
          <p>Discount : {discount}</p>
          <p>Tax: {tax}</p>
          <p>Total :{total} </p>
          <h5>Status Info</h5>
          <p>
            Status :
            <span
              className={
                status === "delivered"
                  ? "purple"
                  : status === "shipped"
                  ? "green"
                  : "red"
              }
            >
              {" "}
              {status}
            </span>
          </p>

          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
};


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
      <span>
        {" "}
        ${price} X {quantity} = ${price * quantity}
      </span>
    </div>
  );
};

export default TransactionManagement;
