import AdminSidebar from "../components/AdminSidebar";
import { ReactElement } from "react";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import {FaTrash} from "react-icons/fa";
interface DataType {
  avatar: ReactElement;
  name: string;
  email: number;
  gender: "Male" | "Female";
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  { Header: "Avatar", accessor: "avatar" },
  { Header: "Name", accessor: "name" },
  { Header: "Email", accessor: "email" },
  { Header: "Gender", accessor: "gender" },
  { Header: "Role", accessor: "role" },
  { Header: "Action", accessor: "action" },
];

const Customers = () => {
  
const [data] = useState<DataType[]>([
  {
    avatar: (
      <img
        src="https://img.etimg.com/thumb/msid-108517210,width-640,resizemode-4,imgsize-57784/alia-bhatts-31st-birthday.jpg"
        alt="avatar"
      />
    ),
    name: "Alia Bhatt",
    email: 1234567890,
    gender: "Female",
    role: "admin",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR4Q4iX4i7Zn0ZLjDh4Qv3JUo7Jk2Jk8Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9Kk9&usqp=CAU"
        alt="avatar"
      />
    ),
    name: "Shivam",
    email: 1234567890,
    gender: "Male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTAp7qFXOdCuXbeEaI6mgU0zKKAiUi6n-0p6UrZZ4hvOSuvRNySRsHp03nCxVzUzMEeZOONCCQBJeP6MszHtAw1WXCrKb7fLzopUbbP-Dc9kINy1IUsXa74y2TB&usqp=CAU"
        alt="avatar"
      />
    ),
    name: "gaurav",
    email: 1234567890,
    gender: "Male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201812/talpade.jpeg?size=690:388" />
    ),
    name: "lakhan",
    email: 1234567890,
    gender: "Male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ), // awant to add dustbin button
  },
]);

const Table = useCallback(
  TableHOC<DataType>(
    columns,
    data,
    "dashboard-product-box",
    "Customers",
    true
  ),
  [columns, data]
);


  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  );
};

export default Customers;

