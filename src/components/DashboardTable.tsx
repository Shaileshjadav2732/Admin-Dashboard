/**
 * This component renders a table with the columns 'Id', 'Quantity', 'Amount' and 'Status'
 * It uses the TableHOC (Higher Order Component) to render the table
 * The TableHOC takes in the columns, data and other props to render the table
 * The data is an empty array, so the table will not display any data
 * The heading of the table is 'Top Transactions'
 * The component is exported as default
 */
import { Column } from "react-table";
import TableHOC from "./TableHOC";

/**
 * The DataType interface r
 * epresents the type of data that will be displayed in the table
 * It has 5 properties: id (string), quantity (number), discount (number), amount (number) and status (string)
 */
interface DataType {
  id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
}

/**
 * The columns array defines the columns of the table
 * Each object in the array represents a column
 * The Header property is the text that will be displayed in the header of the column
 * The accessor property is the key of the data that will be displayed in the column
 */
const columns: Column<DataType>[] = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },

  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

/**
 * The DashboardTable component is a function that returns the TableHOC component
 * The TableHOC component is passed the columns, an empty array (data), the containerClassname ('transactionBox') and the heading ('Top Transactions')
 */
const DashboardTable = ({ data = [] }: { data: DataType[] }) => {
  return TableHOC<DataType>(
    columns,
    data,
    "transaction-box",
    "Top Transactions"
  )();
};

export default DashboardTable;
