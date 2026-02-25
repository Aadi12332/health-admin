import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "08 May", revenue: 430 },
  { name: "09 May", revenue: 300 },
  { name: "10 May", revenue: 210 },
  { name: "11 May", revenue: 50 },
  { name: "12 May", revenue: 90 },
  { name: "13 May", revenue: 160 },
  { name: "14 May", revenue: 30 },
];

function RevenueChart() {
  return (
    <div className="bg-white p-6 rounded-[14px] border border-[#0000001A] h-[420px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[20px] text-[#0A0A0A]">Platform Revenue</h2>
        <div className="flex gap-2 text-[10px]">
          <button className="bg-[#2B7A7C] text-white font-bold px-3 py-1 rounded-[5px]">
            7 days
          </button>
          <button className="bg-[#96E9F733] px-3 py-1 rounded-[5px]">
            30 days
          </button>
          <button className="bg-[#96E9F733] px-3 py-1 rounded-[5px]">
            90 days
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          data={data}
          margin={{ top: 0, right: 5, left: -20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

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
