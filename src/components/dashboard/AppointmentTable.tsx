import { Triangle } from "lucide-react"
import { useState } from "react"

function AppointmentTable() {
  const [filter, setFilter] = useState<"today" | "all">("today")

  const data = [
    ["Dr. Emily Chen", "James Harry", "Jan 10, 2026", "2:00 PM"],
    ["Dr. Michael Ross", "Christie Joseph", "Jan 10, 2026", "10:00 AM"],
    ["Dr. Sarah Miller", "James Harry", "Jan 10, 2026", "3:30 PM"],
    ["Dr. Michael Ross", "Tom Russel", "Jan 10, 2026", "10:00 AM"],
    ["Dr. Sarah Miller", "Kimi Anto", "Jan 10, 2026", "3:30 PM"],
    ["Dr. Daniel Craig", "Sophia Lee", "Jan 11, 2026", "11:00 AM"],
    ["Dr. Amanda Clark", "Liam Brown", "Jan 11, 2026", "4:00 PM"],
    ["Dr. Robert White", "Emma Watson", "Jan 12, 2026", "9:00 AM"],
    ["Dr. Olivia Stone", "Noah Smith", "Jan 12, 2026", "1:30 PM"],
    ["Dr. Ethan Hunt", "Mia Johnson", "Jan 13, 2026", "5:00 PM"]
  ]

  const todayDate = "Jan 10, 2026"

  const filteredData =
    filter === "today"
      ? data.filter((row) => row[2] === todayDate)
      : data

  return (
    <div className="bg-white p-6 rounded-[14px] border border-[#0000001A] max-h-[420px] overflow-hidden">
      <div className="flex justify-between mb-6">
        <h2 className="text-[20px] text-[#0A0A0A]">
          Appointment Scheduled
        </h2>

        <button
          onClick={() =>
            setFilter((prev) => (prev === "today" ? "all" : "today"))
          }
          className="bg-gray-100 px-4 py-1 rounded-md text-sm flex gap-3 items-center"
        >
          {filter === "today" ? "Today" : "All"}
          <Triangle size={10} className="fill-black rotate-180" />
        </button>
      </div>

      <div className="h-full overflow-auto scroll-hide"> 
        <table className="w-full text-sm ">
        <thead>
          <tr className="text-left">
            <th className="pb-3 text-[14px] font-normal text-[#0A0A0A]">
              Provider
            </th>
            <th className="pb-3 text-[14px] font-normal text-[#0A0A0A]">
              Patient
            </th>
            <th className="pb-3 text-[14px] font-normal text-[#0A0A0A]">
              Date
            </th>
            <th className="pb-3 text-[14px] font-normal text-[#0A0A0A]">
              Time
            </th>
            <th className="pb-3 text-[14px] font-normal text-[#0A0A0A]">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((row, i) => (
            <tr key={i} className="border-t">
              {row.map((cell, idx) => (
                <td key={idx} className="py-4">
                  {cell}
                </td>
              ))}
              <td>
                <span className="bg-[#F6EAD9] text-[#3A2006] px-3 py-1 rounded-full text-[12px]">
                  Scheduled
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default AppointmentTable