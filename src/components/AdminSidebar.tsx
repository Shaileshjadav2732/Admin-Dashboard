import {IconType } from "react-icons";
import { Link,Location, useLocation } from "react-router-dom";
import { RiDashboardFill, RiShoppingBag2Fill,RiCoupon3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import {FaChartBar ,FaChartPie,FaChartLine ,FaStopwatch,FaGamepad} from "react-icons/fa"
const AdminSidebar = () => {
  const location = useLocation(); //useLocation()is use for get the url location from the browser and store it in location variable 
  return (
    <aside>
      <h2>Logo</h2>

      <FirstDiv location={location} />
      <SecondDiv location={location} />
      <ThirdDiv location={location} />
    </aside>
  );
};

const FirstDiv = ({location}:{location:Location})=>{
return (<div>
   <h5>Dashboard</h5>
   <ul>
     <Li
       url="/admin/dashboard" 
       text="Dashboard"
       Icon={RiDashboardFill}
       location={location}
     />
     <Li
       url="/admin/products"
       text="Product"
       Icon={RiShoppingBag2Fill}
       location={location}
     />
     <Li
       url="/admin/customers"
       text="Customer"
       Icon={IoIosPeople}
       location={location}
     />
     <Li
       url="/admin/transaction"
       text="Transaction"
       Icon={AiFillFileText}
       location={location}
     />
   </ul>
 </div>)
}
const SecondDiv = ({location}:{location:Location})=>{
return(<div>
  <h5>Charts</h5>
  <ul>
    <Li
      url="/admin/chart/Bar"
      text="Bar"
      Icon={FaChartBar}
      location={location}
    />
    <Li
      url="/admin/chart/Pie"
      text="Pie"
      Icon={FaChartPie}
      location={location}
    />
    <Li
      url="/admin/chart/Line"
      text="Line"
      Icon={FaChartLine}
      location={location}
    />
   
  </ul>
</div>)
}

const ThirdDiv = ({ location }: { location: Location }) => {
 return( <div>
    <h5>Apps</h5>
    <ul>
      <Li
        url="/admin/App/stopwatch"
        text="Stopwatch"
        Icon={FaStopwatch}
        location={location}
      />
      <Li
        url="/admin/app/coupon"
        text="Coupon"
        Icon={RiCoupon3Fill}
        location={location}
      />
      <Li
        url="/admin/app/toss"
        text="Toss"
        Icon={FaGamepad}
        location={location}
      />
    </ul>
  </div>)
};

interface LiProps {
  url: string;
  text: string;
  Icon: IconType;
  location:Location;
}
const Li =  ({ url, text, location, Icon }: LiProps) => (
  <li
  style={{
    backgroundColor:location.pathname.includes(url)
    ? "rgba(0,115,255,0.1)"
    : "white",
  }}
  >
    <Link
      to={url}
      style={{ color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black" }}
      >
      <Icon/>
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
