import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useState } from "react";

const data7 = [
  { name: "08 May", revenue: 430 },
  { name: "09 May", revenue: 300 },
  { name: "10 May", revenue: 210 },
  { name: "11 May", revenue: 50 },
  { name: "12 May", revenue: 90 },
  { name: "13 May", revenue: 160 },
  { name: "14 May", revenue: 30 },
];

const data30 = [
  { name: "Week 1", revenue: 1200 },
  { name: "Week 2", revenue: 1800 },
  { name: "Week 3", revenue: 1500 },
  { name: "Week 4", revenue: 2200 },
];

const data90 = [
  { name: "Month 1", revenue: 6200 },
  { name: "Month 2", revenue: 7100 },
  { name: "Month 3", revenue: 8400 },
];

function RevenueChart() {
  const [range, setRange] = useState<"7" | "30" | "90">("7");

  const getData = () => {
    if (range === "30") return data30;
    if (range === "90") return data90;
    return data7;
  };

  return (
    <div className="bg-white p-6 rounded-[14px] border border-[#0000001A] h-[420px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[20px] text-[#0A0A0A]">
          Platform Revenue
        </h2>

        <div className="flex gap-2 text-[10px]">
          {["7", "30", "90"].map((item) => (
            <button
              key={item}
              onClick={() => setRange(item as "7" | "30" | "90")}
              className={`px-3 py-1 rounded-[5px] font-bold ${
                range === item
                  ? "bg-[#2B7A7C] text-white"
                  : "bg-[#96E9F733]"
              }`}
            >
              {item} days
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          data={getData()}
          margin={{ top: 0, right: 5, left: -20, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "#333333" }}
            padding={{ left: 0, right: 0 }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "#333333" }}
          />

          <Tooltip />

          <Line
            type="linear"
            dataKey="revenue"
            stroke="#1E7F78"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueChart;