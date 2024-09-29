import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const ProductManagement = lazy(
  () => import("./pages/management/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/management/TransactionManagement")
);
const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
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
          <Route path="/admin/chart/Bar" element={<BarCharts/>} />
          <Route path="/admin/chart/Pie" element={<PieChart/>} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
