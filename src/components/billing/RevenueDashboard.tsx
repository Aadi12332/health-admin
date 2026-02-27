import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend
} from "recharts"
import { Download } from "lucide-react"

const chartData = [
  { month: "January", revenue: 2900, payouts: 1700 },
  { month: "February", revenue: 2500, payouts: 2050 },
  { month: "March", revenue: 2200, payouts: 1800 },
  { month: "April", revenue: 2700, payouts: 1500 },
  { month: "May", revenue: 2100, payouts: 2100 },
  { month: "June", revenue: 1700, payouts: 2800 },
  { month: "July", revenue: 2100, payouts: 2400 },
  { month: "August", revenue: 2700, payouts: 2000 }
]

const tableData = Array(5).fill({
  month: "Jan 2024",
  consultation: "$400",
  platform: "$600",
  total: "$1000"
})

function RevenueDashboard() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

      <div className="bg-white border border-[#0000001A] rounded-[14px] p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[18px] text-[#0A0A0A]">
            Revenue & Payouts
          </h2>

          <button className="flex items-center gap-2 border border-[#E5E7EB] px-4 py-1 text-[#0A0A0A] rounded-lg text-sm">
            <Download size={14} />
            Export
          </button>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart
            data={chartData}
            margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              width={40}
            />

            <Tooltip />
            <Legend wrapperStyle={{ fontSize: "10px" }} />

            <Line
              type="linear"
              dataKey="revenue"
              stroke="#219580"
              strokeWidth={2}
              dot={{ r: 3 }}
            />

            <Line
              type="linear"
              dataKey="payouts"
              stroke="#7C83FD"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white border border-[#0000001A] rounded-[14px] p-6">
        <h2 className="text-[18px] mb-6">Export Data</h2>

        <div className="flex gap-4 mb-6">
          <input
            type="date"
            placeholder="From"
            className="border border-[#CCCCCC] rounded-lg px-4 py-2 w-full"
          />
          <input
            type="date"
            placeholder="To"
            className="border border-[#CCCCCC] rounded-lg px-4 py-2 w-full"
          />
        </div>

        <div className="mb-6">
          <p className="mb-3">Format</p>
          <div className="flex gap-3">
            <button className="px-4 py-1 rounded-full bg-[#DCFCE7] text-[#219580] text-sm">
              PDF
            </button>
            <button className="px-4 py-1 rounded-full text-[#919191] border border-[#D4D4D4] text-sm">
              Excel
            </button>
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-3">Get it as</p>
          <div className="flex gap-3">
            <button className="px-4 py-1 rounded-full bg-[#DCFCE7] text-[#219580] text-sm">
              Email
            </button>
            <button className="px-4 py-1 rounded-full text-[#919191] flex gap-2 items-center border border-[#D4D4D4] text-sm">
                <Download size={14} />
              Download
            </button>
          </div>
        </div>

        <button className="w-full text-sm bg-gradient-to-b from-[#219580] to-[#346079] text-white flex items-center justify-center h-[36px] rounded-lg">
          Export Data
        </button>
      </div>

      <div className="bg-white border border-[#0000001A] rounded-[14px] p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[18px]">Revenue Breakdown</h2>
          <button className="flex items-center gap-2 border border-[#E5E7EB] px-4 py-1 text-[#0A0A0A] rounded-lg text-sm">
            <Download size={14} />
            Export
          </button>
        </div>

        <table className="w-full text-sm">
          <thead className="bg-[#F6F6F6] text-center">
            <tr>
              <th className="py-3 font-normal">Month</th>
              <th className="font-normal">Consultation Fee</th>
              <th className="font-normal">Platform Fee</th>
              <th className="font-normal">Total Revenue</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i} className="border-t text-center">
                <td className="py-4">{row.month}</td>
                <td>{row.consultation}</td>
                <td>{row.platform}</td>
                <td>{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-[#0000001A] rounded-[14px] p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[18px]">Expense Breakdown</h2>
          <button className="flex items-center gap-2 border border-[#E5E7EB] px-4 py-1 text-[#0A0A0A] rounded-lg text-sm">
            <Download size={14} />
            Export
          </button>
        </div>

        <table className="w-full text-sm">
          <thead className="bg-[#F6F6F6] text-center font-normal">
            <tr>
              <th className="py-3 font-normal">Month</th>
              <th className="font-normal">Provider Payout</th>
              <th className="font-normal">Refund Amounts</th>
              <th className="font-normal">Expenses</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i} className="border-t text-center">
                <td className="py-4">{row.month}</td>
                <td>$400</td>
                <td>$600</td>
                <td>$1000</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default RevenueDashboard