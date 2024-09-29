
import AdminSidebar from '../../components/AdminSidebar'
import { BarChart} from '../../components/Charts'
const BarCharts = () => {
  const months=[
    "January", "February", "March", "April", "May", "June", "July",
    
  ]
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data_1={[100, 200, 300, 400, 500, 600, 658]}
            data_2={[200, 300, 400, 500, 600, 894, 123]}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsl(179, 61%, 31%)`}
            bgColor_2={`hsl(248, 53%, 58%)`}
          />
          <h2>Top Selling Products & Top Customers</h2>
        </section>
        <section>
          <BarChart
          horizontal={true}
            data_1={[100, 200, 300, 400, 500, 600, 658]}
            data_2={[]}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsl(179, 61%, 31%)`}
            bgColor_2=""
            labels={months}
          />
          <h2>Order ThroughOut the Year</h2>
        </section>
      </main>
    </div>
  );
}

export default BarCharts