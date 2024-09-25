
import AdminSidebar from "../components/AdminSidebar";
import { ReactElement } from "react";
import { Column } from "react-table";
import { FaTrash } from "react-icons/fa";
import TableHOC from "../components/TableHOC";
import { useState } from "react";
interface DataType {
  avatar: ReactElement;
  user: string;
  amount: number;
  quantity: number,
  status: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  { Header: "Avatar", accessor: "avatar" },
  { Header: "User", accessor: "user" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "Status", accessor: "status" },
  { Header: "Action", accessor: "action" },
];
const Transaction = () => {

  const [data] = useState<DataType[]>([
    {
      avatar: (
        <img
          src="https://img.etimg.com/thumb/msid-108517210,width-640,resizemode-4,imgsize-57784/alia-bhatts-31st-birthday.jpg"
          alt="avatar"
        />
      ),
      user: "Alia Bhatt",
      amount: 1234567890,
      quantity: 1,
      status: "success",
      action: (
        <button>
          <FaTrash />
        </button>
      ),
    },
  ]);

  const Table = TableHOC<DataType>(
    columns,
    data,
    "dashboard-transaction-box",
    "Transactions",
    true
  );
  return (
    <div>
      <div className="admin-container">
        <AdminSidebar />
        <main>{Table()}</main>
      </div>
    </div>
  );
}

export default Transaction