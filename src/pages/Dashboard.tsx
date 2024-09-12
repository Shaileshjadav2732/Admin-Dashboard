import { lazy } from 'react'

const AdminSidebar =lazy(()=>import('../components/AdminSidebar')) 
const Dashboard = () => {

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main>njnk</main>
    </div>
  );
}

export default Dashboard