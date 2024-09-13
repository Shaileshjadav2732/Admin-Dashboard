import { lazy } from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImage from "../assets/userpic.png";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from "../assets/data.json";

const AdminSidebar = lazy(() => import("../components/AdminSidebar"));

const Dashboard = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data,users,docs" />
          <FaRegBell />
          <img src={userImage} />
        </div>
        <section className="widget-container">
          <WidgetItem
            percent={75}
            amount={true}
            value={2732852963}
            heading="Revenue"
            color="rgb(0,155,255)"
          />
          <WidgetItem
            percent={-54}
            value={2732}
            heading="Users"
            color="rgb(132,155,255)"
          />
          <WidgetItem
            percent={40}
            value={2732}
            heading="Transaction"
            color="rgb(0,155,255)"
          />
          <WidgetItem
            percent={40}
            value={2732}
            heading="Products"
            color="rgb(0,155,255)"
          />
        </section>
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div> 
              {data.categories.map((category) => (
                <CategoryItem
                  key={category.value}
                  color={`hsl(${category.value}, 50%, 50%)`}
                  value={category.value}
                  heading={category.heading}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
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
  amount = false,
}: widgetItemProps) => {
  return (
    <article className="widget">
      <div className="widget-info">
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
      <div
        className="circle-info"
        style={{
          background: `conic-gradient(${color} ${
            (Math.abs(percent) / 100) * 360
          }deg,
          rgb(255,255,255) 0
          )`,
        }}
      >
        <p style={{ color: color }}>{percent}%</p>
      </div>
    </article>
  );
};

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div style={{ backgroundColor: color, width: `${value}` }}></div>
    </div>
    <span>{value}%</span>
  </div>
);
export default Dashboard;
