function AppointmentTable() {
  const data = [
    ["Dr. Emily Chen", "James Harry", "Jan 10, 2026", "2:00 PM"],
    ["Dr. Michael Ross", "Christie Joseph", "Jan 10, 2026", "10:00 AM"],
    ["Dr. Sarah Miller", "James Harry", "Jan 10, 2026", "3:30 PM"],
    ["Dr. Michael Ross", "Tom Russel", "Jan 10, 2026", "10:00 AM"],
    ["Dr. Sarah Miller", "Kimi Anto", "Jan 10, 2026", "3:30 PM"]
  ]

  return (
    <div className="bg-white p-6 rounded-[14px] border border-[#0000001A]">
      <div className="flex justify-between mb-6">
        <h2 className="text-[20px] text-[#0A0A0A]">Appointment Scheduled</h2>
        <button className="bg-gray-100 px-4 py-1 rounded-md text-sm">
          Today
        </button>
      </div>

      <table className="w-full text-sm">
        <thead className="text-gray-500">
          <tr className="text-left">
            <th className="pb-3 text-[14px] font-normal text-[#0A0A0A]">Provider</th>
            <th className="pb-3 text-[14px] font-normal text-[#0A0A0A]">Patient</th>
            <th className="pb-3 text-[14px] font-normal text-[#0A0A0A]">Date</th>
            <th className="pb-3 text-[14px] font-normal text-[#0A0A0A]">Time</th>
            <th className="pb-3 text-[14px] font-normal text-[#0A0A0A]">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t">
              {row.map((cell, idx) => (
                <td key={idx} className="py-4">{cell}</td>
              ))}
              <td>
                <span className="bg-[#F6EAD9] border border-[#00000000] text-[#3A2006] px-3 py-1 rounded-full text-[12px]">
                  Scheduled
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AppointmentTable