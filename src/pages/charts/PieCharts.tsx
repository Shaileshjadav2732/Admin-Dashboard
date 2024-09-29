import AdminSidebar from "../../components/AdminSidebar";
import { PieChart,DoughnutChart } from "../../components/Charts";
import {categories} from "../../assets/data.json";
const PieCharts = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Pie & Doughnut Charts</h1>
        <section>
          <div>
            <PieChart
              labels={["processing", "shipped", "Delivered"]}
              data={[45,66,83]}
              backgroundColor={[
                `hsl(179, 61%, 31%)`,
                `hsl(248, 53%, 58%)`,
                `hsl(150, 100%, 70%)`
              ]}
              offset={[0,0,50]}
            />
          </div>
          <h2>Order Fulfillment Ratio</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={categories.map((category) => category.heading)}
              data={categories.map((category) => category.value)}
              backgroundColor={categories.map((category) => `hsl(${category.value*4}, ${category.value}%, 50%)`)}
               legends={false}
              offset={[0,0,50]}
            />
          </div>
          <h2>Product Category Ratio</h2>
        </section>
      </main>
    </div>
  );
};

export default PieCharts;

