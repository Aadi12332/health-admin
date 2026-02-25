import { X } from "lucide-react"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts"

type Props = {
  open: boolean
  onClose: () => void
  doctorName: string
}

const data = [
  { name: "Clinical Performance", value: 50, color: "#F65B7C" },
  { name: "Patient Satisfaction", value: 30, color: "#3E95CD" },
  { name: "Productivity", value: 10, color: "#F2C14E" },
  { name: "Professionalism", value: 6, color: "#4CB5AE" },
  { name: "Administrative", value: 4, color: "#8E63E6" }
]

function PerformanceModal({ open, onClose, doctorName }: Props) {
  if (!open) return null

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 !mt-0">
      <div onClick={(e)=>e.stopPropagation()} className="bg-white w-[95%] max-w-[778px] rounded-[10px] p-8 relative">
        <div className="flex justify-between items-center">
          <h2 className="text-[22px] font-medium text-[#101828]">
            Performance & Activity
          </h2>
          <button onClick={onClose}>
            <X size={28} className="text-[#3C3C3C]" />
          </button>
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-[22px] font-semibold text-[#101828]">
            {doctorName}
          </h3>
        </div>

        <div className="flex justify-center">
          <div className="w-[362px] h-[362px]">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={80}
                  outerRadius={160}
                  paddingAngle={0}
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-10 flex-wrap">
          {data.map((item) => (
            <div key={item.name} className="flex items-center flex-col gap-3">
              <span
                className="w-6 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-[16px] text-[#101828]">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PerformanceModal