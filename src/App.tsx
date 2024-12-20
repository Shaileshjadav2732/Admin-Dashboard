import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";

import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));
const Toss = lazy(() => import("./pages/apps/Toss"));
const StopWatch = lazy(() => import("./pages/apps/StopWatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const ProductManagement = lazy(() =>
  import("./pages/management/ProductManagement")
);
const TransactionManagement = lazy(() =>
  import("./pages/management/TransactionManagement")
);
const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Link to={"/admin/dashboard"}>
                <button style={ { margin: "10px",padding: "10px" ,borderRadius: "5px",backgroundColor: "rgba(0, 0, 0, 0.216)", color: "black" } }>Visit Dashboard</button>
              </Link>
            }
          />

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          {/* {Management} */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
          {/* charts */}
          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />
          {/* apps */}

          <Route path="/admin/app/toss" element={<Toss />} />
          <Route path="/admin/app/stopwatch" element={<StopWatch />} />
          <Route path="/admin/app/coupon" element={<Coupon />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;

