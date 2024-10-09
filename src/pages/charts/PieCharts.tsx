import AdminSidebar from "../../components/AdminSidebar";
import { PieChart, DoughnutChart } from "../../components/Charts";
import { categories } from "../../assets/data.json";
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
              data={[12, 9, 13]}
              backgroundColor={[
                `hsl(179, 80%, 80%)`,
                `hsl(248, 53%, 58%)`,
                `hsl(150, 100%, 70%)`,
              ]}
              offset={[0, 0, 20, 20]}
              // cutout={0.1}
              legends={false}
            />
          </div>
          <h2>Order Fulfillment Ratio</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={categories.map((category) => category.heading)}
              data={categories.map((category) => category.value)}
              backgroundColor={categories.map(
                (category) =>
                  `hsl(${category.value * 4}, ${category.value}%, 50%)`
              )}
              legends={false}
              offset={[0, 0, 0, 50]}
            />
          </div>
          <h2>Product Category Ratio</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={["In Stock", "Out Of Stock"]}
              data={categories.map((category) => category.value)}
              backgroundColor={categories.map(
                (category) =>
                  `hsl(${category.value * 4}, ${category.value}%, 50%)`
              )}
              legends={false}
              offset={[0, 0, 0, 50]}
            />
          </div>
          <h2>Stock Availability</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              data={[32, 18, 5, 20, 25]}
              backgroundColor={[
                "hsl(179, 80%, 80%)",
                "hsl(248, 53%, 58%)",
                "hsl(150, 100%, 70%)",
                "hsl(179, 80%, 80%)",
                "hsl(248, 53%, 58%)",
              ]}
              legends={false}
              offset={[20, 30, 20, 30, 80]}
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section>
        <section>
          <div>
            <PieChart
              labels={["Teenager(Below 18)", "Adult(18-65)", "Older(65+)"]}
              data={[30, 250, 70]}
              backgroundColor={[
                `hsl(10, ${80}%, 80%)`,
                `hsl(10, ${80}%, 58%)`,
                `hsl(10, ${80}%, 70%)`,
              ]}
              offset={[0, 0, 20, 20]}
              // cutout={0.1}
              legends={false}
            />
          </div>
          <h2>Users Age Group</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={["Admin", "Customers"]}
              data={[40,250]}
              backgroundColor={["hsl(335, 100%, 38%)", "hsl(44, 98%, 50%)"]}
              offset={[0, 80]}
            />
          </div>
        
        </section>
      </main>
    </div>
  );
};

export default PieCharts;
