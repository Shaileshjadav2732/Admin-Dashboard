import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const months = ["january", "february", "march", "april", "may", "june", "july"];

interface BarChartProps {
  horizontal?: boolean;
  data_1: number[];
  data_2: number[];
  title_1: string;
  title_2: string;
  bgColor_1: string;
  bgColor_2: string;
  labels?: string[];
}

export const BarChart = ({
  horizontal = false,
  data_1 = [],
  data_2 = [],
  title_1,
  title_2,
  bgColor_1,
  bgColor_2,
  labels = months,
}: BarChartProps) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  /**
   * ChartData is a predefined type from 'chart.js' that represents the data that will be passed to the chart.
   * It is a generic type that takes three type parameters:
   * - The first type parameter is the type of the chart (in this case, 'bar').
   * - The second type parameter is the type of the data points (in this case, number[]).
   * - The third type parameter is the type of the labels (in this case, string).
   *
   * We use ChartData here to ensure that the data object we create conforms to the expected shape of the data that will be passed to the chart.
   * If we didn't use ChartData, the type of the data object would be inferred as { labels: string[]; datasets: [{ label: string; data: number[]; backgroundColor: string; }] } which is not as specific as ChartData<"bar", number[], string>
   */

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor_1,
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: bgColor_2,
      },
    ],
  };
  return <Bar data={data} options={options} />;
};
