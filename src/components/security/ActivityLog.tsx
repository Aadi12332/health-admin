import { useState } from "react"

const activityData = [
  {
    time: "April 21, 2025; 2:45PM",
    user: "Sarah Thompson",
    role: "Provider",
    activity: "Viewed Patient Record for John Doe (ID:87457)",
    ip: "192.874.637.32"
  },
  {
    time: "April 21, 2025; 2:45PM",
    user: "Sarah Thompson",
    role: "Provider",
    activity: "Viewed Patient Record for John Doe (ID:87457)",
    ip: "192.874.637.32"
  },
  {
    time: "April 21, 2025; 2:45PM",
    user: "Sarah Thompson",
    role: "Provider",
    activity: "Viewed Patient Record for John Doe (ID:87457)",
    ip: "192.874.637.32"
  },
  {
    time: "April 21, 2025; 2:45PM",
    user: "Sarah Thompson",
    role: "Provider",
    activity: "Viewed Patient Record for John Doe (ID:87457)",
    ip: "192.874.637.32"
  },
  {
    time: "April 21, 2025; 2:45PM",
    user: "Sarah Thompson",
    role: "Provider",
    activity: "Viewed Patient Record for John Doe (ID:87457)",
    ip: "192.874.637.32"
  },
  {
    time: "April 21, 2025; 2:45PM",
    user: "Sarah Thompson",
    role: "Provider",
    activity: "Viewed Patient Record for John Doe (ID:87457)",
    ip: "192.874.637.32"
  },
  {
    time: "April 21, 2025; 2:45PM",
    user: "Sarah Thompson",
    role: "Provider",
    activity: "Viewed Patient Record for John Doe (ID:87457)",
    ip: "192.874.637.32"
  },
  {
    time: "April 21, 2025; 2:45PM",
    user: "Sarah Thompson",
    role: "Provider",
    activity: "Viewed Patient Record for John Doe (ID:87457)",
    ip: "192.874.637.32"
  },
  {
    time: "April 21, 2025; 2:45PM",
    user: "Sarah Thompson",
    role: "Provider",
    activity: "Viewed Patient Record for John Doe (ID:87457)",
    ip: "192.874.637.32"
  },
  {
    time: "April 21, 2025; 2:45PM",
    user: "Sarah Thompson",
    role: "Provider",
    activity: "Viewed Patient Record for John Doe (ID:87457)",
    ip: "192.874.637.32"
  },
]

function ActivityLog() {
  return (
    <div className="bg-white border border-[#0000001A] rounded-[14px] overflow-hidden">

      <div className="hidden md:block">
        <table className="w-full text-left">
          <thead className="bg-[#F9FAFB] text-[#667085] text-sm">
            <tr>
              <th className="px-6 py-4 font-normal">Time</th>
              <th className="px-6 py-4 font-normal">User</th>
              <th className="px-6 py-4 font-normal">Role</th>
              <th className="px-6 py-4 font-normal">Activity</th>
              <th className="px-6 py-4 font-normal">IP Address</th>
            </tr>
          </thead>

          <tbody>
            {activityData.map((item, index) => (
              <tr
                key={index}
                className="border-t border-[#0000001A]"
              >
                <td className="px-6 py-5 font-normal">{item.time}</td>
                <td className="px-6 py-5 font-normal">{item.user}</td>
                <td className="px-6 py-5 font-normal">{item.role}</td>
                <td className="px-6 py-5 font-normal max-w-[320px]">
                  {item.activity}
                </td>
                <td className="px-6 py-5 font-normal">{item.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden divide-y divide-[#0000001A]">
        {activityData.map((item, index) => (
          <div key={index} className="p-5 space-y-2">
            <div>
              <p className="text-xs text-[#667085]">Time</p>
              <p>{item.time}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-[#667085]">User</p>
                <p>{item.user}</p>
              </div>

              <div>
                <p className="text-xs text-[#667085]">Role</p>
                <p>{item.role}</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-[#667085]">Activity</p>
              <p>{item.activity}</p>
            </div>

            <div>
              <p className="text-xs text-[#667085]">IP Address</p>
              <p>{item.ip}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default ActivityLog