
import { lazy } from 'react'

const AdminSidebar =lazy(()=>import('../components/AdminSidebar')) 
const Dashboard = () => {

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main>kfjmkifmwfmlof</main>
    </div>
  );
}

export default Dashboard