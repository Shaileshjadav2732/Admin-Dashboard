import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { lazy,Suspense } from "react"

import Loader from "./components/Loader"

const Dashboard = lazy(()=>import ( "./pages/Dashboard"))
const Transaction = lazy(()=>import ( "./pages/Transaction"))
const Products = lazy(()=> import ( "./pages/Products"))
const Customers = lazy(()=>import ( "./pages/Customers"))

const App = () => {
  return (
    <Suspense fallback={<Loader/>}>

<Router>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
        <Route path="/admin/customers" element={<Customers/>}></Route>
        <Route path="/admin/products" element={<Products/>}></Route>
        <Route path="/admin/transaction" element={<Transaction/>}></Route>
      </Routes>
    </Router>
    </Suspense>
  )
}

export default App