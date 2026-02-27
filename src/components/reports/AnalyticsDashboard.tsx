import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts"
import { Download } from "lucide-react"

const months = [
  { month: "January", value: 2900 },
  { month: "February", value: 2500 },
  { month: "March", value: 2200 },
  { month: "April", value: 2700 },
  { month: "May", value: 2100 },
  { month: "June", value: 1700 },
  { month: "July", value: 2100 },
  { month: "August", value: 2700 }
]

const revenueData = [
  { month: "January", revenue: 2400, commission: 1500 },
  { month: "February", revenue: 1900, commission: 1300 },
  { month: "March", revenue: 2000, commission: 1000 },
  { month: "April", revenue: 1200, commission: 1400 },
  { month: "May", revenue: 1500, commission: 1300 },
  { month: "June", revenue: 1800, commission: 1500 },
  { month: "July", revenue: 1500, commission: 1200 },
  { month: "August", revenue: 1700, commission: 1600 }
]

const engagementData = [
  { name: "Visit completion", value: 25, color: "#3F5587" },
  { name: "Messaging", value: 28, color: "#E0A548" },
  { name: "Follow up", value: 20, color: "#22C55E" },
  { name: "Appointments", value: 18, color: "#9A3412" },
  { name: "Patient Satisfaction", value: 13, color: "#E07A5F" }
]

const providers = [
  { name: "Dr. Emily Chen", consultations: 112, commission: 1134, hours: 85 },
  { name: "Dr. Sarah Miller", consultations: 112, commission: 1134, hours: 85 },
  { name: "Dr. Michael Ross", consultations: 112, commission: 1134, hours: 85 },
  { name: "Dr. Emily Chen", consultations: 112, commission: 1134, hours: 85 },
  { name: "Dr. Sarah Miller", consultations: 112, commission: 1134, hours: 85 },
  { name: "Dr. Michael Ross", consultations: 112, commission: 1134, hours: 85 },
  { name: "Dr. Emily Chen", consultations: 112, commission: 1134, hours: 85 },
  { name: "Dr. Sarah Miller", consultations: 112, commission: 1134, hours: 85 },
  { name: "Dr. Michael Ross", consultations: 112, commission: 1134, hours: 85 },
]

function AnalyticsDashboard() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

      <div className="bg-white border border-[#0000001A] rounded-[14px] p-6">
        <div className="flex justify-between mb-6">
          <h2 className="text-[18px]">Consultation Volume</h2>
          <button className="flex items-center gap-2 border px-3 py-1 rounded-lg text-sm">
            <Download size={14} />
            Export
          </button>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={months} margin={{ top: 0, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip />
            <Line
              type="linear"
              dataKey="value"
              stroke="#219580"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white border border-[#0000001A] rounded-[14px] p-6">
        <div className="flex justify-between mb-6">
          <h2 className="text-[18px]">Revenue & Commission</h2>
          <button className="flex items-center gap-2 border px-3 py-1 rounded-lg text-sm">
            <Download size={14} />
            Export
          </button>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={revenueData} margin={{ top: 0, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: "10px" }} />
            <Bar dataKey="revenue" stackId="a" fill="#1F7A6C" />
            <Bar dataKey="commission" stackId="a" fill="#66C2B3" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white border border-[#0000001A] rounded-[14px] p-6 max-h-[360px] overflow-y-auto scroll-hide">
        <div className="flex justify-between mb-6">
          <h2 className="text-[18px]">Provider Activity</h2>
          <button className="flex items-center gap-2 border px-3 py-1 rounded-lg text-sm">
            <Download size={14} />
            Export
          </button>
        </div>

        {providers.map((item, i) => (
          <div key={i} className="flex justify-between gap-2 items-center mb-6 last:mb-0">
            <img src="https://i.pravatar.cc/150?img=10" className="w-10 h-10 rounded-full object-cover" alt="" />
            <div>
              <h3 className="text-[16px] text-[#101828]">{item.name}</h3>
              <p className="text-[#667085] text-sm">Provider</p>
            </div>

            <div>
              <h3 className="text-[16px] text-[#101828]">{item.consultations}</h3>
              <p className="text-[#667085] text-sm">Consultations</p>
            </div>

            <div>
              <h3 className="text-[16px] text-[#101828]">${item.commission}</h3>
              <p className="text-[#667085] text-sm">Commission Earned</p>
            </div>

            <div>
              <h3 className="text-[16px] text-[#101828]">{item.hours}</h3>
              <p className="text-[#667085] text-sm">Hours Worked</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#0000001A] rounded-[14px] p-6">
        <div className="flex justify-between mb-6">
          <h2 className="text-[18px]">Patient Engagement</h2>
          <button className="flex items-center gap-2 border px-3 py-1 rounded-lg text-sm">
            <Download size={14} />
            Export
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <ResponsiveContainer width={250} height={250}>
            <PieChart>
              <Pie
                data={engagementData}
                dataKey="value"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={2}
              >
                {engagementData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="space-y-4">
            {engagementData.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ background: item.color }}
                />
                <span className="text-sm">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default AnalyticsDashboard