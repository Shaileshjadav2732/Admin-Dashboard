import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { ReactElement } from "react";
import { useState, useCallback } from "react";
import { Column } from "react-table";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  { Header: "Photo", accessor: "photo" },
  { Header: "Name", accessor: "name" },
  { Header: "Price", accessor: "price" },
  { Header: "Stock", accessor: "stock" },
  { Header: "Action", accessor: "action" },
];

const products: DataType[] = [
  
  {
    photo: (
      <img
        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4Q4iX4i7Zn0ZLjDh4Qv3JUo7Jk2Jk8Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9&usqp=CAU"
        alt="product"
      />
    ),
    price: 120,
    name: "Nike Air Force 1",
    stock: 5,
    action: <Link to="/admin/product/1">View</Link>,
  },
  {
    photo: (
      <img
        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTAp7qFXOdCuXbeEaI6mgU0zKKAiUi6n-0p6UrZZ4hvOSuvRNySRsHp03nCxVzUzMEeZOONCCQBJeP6MszHtAw1WXCrKb7fLzopUbbP-Dc9kINy1IUsXa74y2TB&usqp=CAU"
        alt="product"
      />
    ),
    price: 150,
    name: "Adidas Superstar",
    stock: 3,
    action: <Link to="/admin/product/2">View</Link>,
  },
  {
    photo: (
      <img
        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR4Q4iX4i7Zn0ZLjDh4Qv3JUo7Jk2Jk8Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9&usqp=CAU"
        alt="product"
      />
    ),
    price: 180,
    name: "Converse Chuck Taylor All Star",
    stock: 2,
    action: <Link to="/admin/product/3">View</Link>,
  },
  {
    photo: (
      <img
        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTAp7qFXOdCuXbeEaI6mgU0zKKAiUi6n-0p6UrZZ4hvOSuvRNySRsHp03nCxVzUzMEeZOONCCQBJeP6MszHtAw1WXCrKb7fLzopUbbP-Dc9kINy1IUsXa74y2TB&usqp=CAU"
        alt="product"
      />
    ),
    price: 100,
    name: "Vans Old Skool",
    stock: 1,
    action: <Link to="/admin/product/4">View</Link>,
  },
];
const Products = () => {
  const [data] = useState<DataType[]>(products);
  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboard-product-box", "Products", true),
    [columns, data]
  );

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table()}</main>
      <Link to="/admin/product/new" className="add-product">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;


