
import AdminSidebar from "../components/AdminSidebar";
import { ReactElement } from "react";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { useState } from "react"; 
import { Link } from "react-router-dom";
interface DataType {
  
  user: string;
  amount: number;
  discount: number,
  status:ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  
  { Header: "User", accessor: "user" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Discount", accessor: "discount" },
  { Header: "Status", accessor: "status" },
  { Header: "Action", accessor: "action" },
];
const Transaction = () => {

  const [data] = useState<DataType[]>([
    {
      user: "Alia Bhatt",
      amount: 500,
      discount:30 ,
      status: <p className="red">Pending</p>,
      action:<Link to="/admin/transaction/1">View</Link>,
    },
    {
      user: "Alia Bhatt",
      amount: 500,
      discount:30 ,
      status: <p className="purple">Processing</p>,
      action:<Link to="/admin/transaction/1">View</Link>,
    },
    {
      user: "Alia Bhatt",
      amount: 500,
      discount:30 ,
      status: <p className="green">succesful</p>,
      action:<Link to="/admin/transaction/1">View</Link>,
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