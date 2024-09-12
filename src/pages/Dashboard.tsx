import { lazy } from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImage from "../assets/userpic.png";
import { HiTrendingUp,HiTrendingDown } from "react-icons/hi";
const AdminSidebar = lazy(() => import("../components/AdminSidebar"));

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data,users,docs" />
          <FaRegBell />
          <img src={userImage} />
        </div>
      </main>
      <section className="widgetContainer">
        <WidgetItem percent={40} amount={true} value={2732} heading="Revenue" color="rgb(0,155,255)"/>
      </section>
    </div>
  );
};

interface widgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}
const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: widgetItemProps) => {
 return (<article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> + {percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%{" "}
        </span>
      )}
    </div>
  </article>)
};
export default Dashboard;
