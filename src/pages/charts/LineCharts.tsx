import AdminSidebar from "../../components/AdminSidebar";
import { LineChart } from "../../components/Charts";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const LineCharts = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Line Charts</h1>
        <section>
          <LineChart
            data={[200, 300, 65, 568, 600, 894, 123, 200, 300, 65, 568, 600, 894, 123]}
            labels={months}
            borderColor="rgb(53,162,255)"
            backgroundColor="rgb(53,162,255,0.5)"
            label={""}
          />
          <h2>Active Users</h2>
        </section>

        <section>
          <LineChart
            data={[40,60, 65, 568, 600, 894, 123, 200, 300, 65, 568, 600, 894, 123]}
            backgroundColor={"hsla(269,80%,48%,0.4)"}
            borderColor={"hsl(269,80%,40%)"}
            label="Products"
            labels={months}
          />
          <h2>Total Products (SKU)</h2>
        </section>
        <section>
          <LineChart
            data={[1400, 46651, 100568, 89545, 86554, 74251, 63545, 55465, 45654, 45654, 45654, 45654, 45654, 45654]}
            backgroundColor={"hsla(129,80%,50%,0.5)"}
            borderColor={"hsl(129,80%,50%)"}
            label="Revenue"
            labels={months}
          />
          <h2>Total Revenue(SKU)</h2>
        </section>
        <section>
          <LineChart
            data={[140, 4651, 10068, 8945, 8654, 7421, 6354, 5465, 4564 ,4654, 4654, 4654, 4654, 4564]}
            backgroundColor={"hsla(29,80%,40%,0.4)"}
            borderColor={"hsl(29,80%,50%)"}
            label="Revenue"
            labels={months}
          />
          <h2>Discount Allotted</h2>
        </section>
      </main>
    </div>
  );
};

export default LineCharts;
