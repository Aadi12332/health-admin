import React from "react"

type Payout = {
  id: number
  name: string
  image: string
  lastPayout: string
  time: string
  total: number
  method: "PayPal" | "Bank Transfer"
  status: "confirmed" | "pending"
}

const payoutData: Payout[] = [
  {
    id: 1,
    name: "John Doe",
    image: "https://i.pravatar.cc/150?img=12",
    lastPayout: "Feb 2, 2026",
    time: "10:00 AM",
    total: 7450,
    method: "PayPal",
    status: "confirmed"
  },
  {
    id: 2,
    name: "Emily Smith",
    image: "https://i.pravatar.cc/150?img=15",
    lastPayout: "Feb 2, 2026",
    time: "11:30 AM",
    total: 7050,
    method: "PayPal",
    status: "confirmed"
  },
  {
    id: 3,
    name: "Michael Brown",
    image: "https://i.pravatar.cc/150?img=18",
    lastPayout: "Feb 3, 2026",
    time: "2:00 PM",
    total: 6350,
    method: "Bank Transfer",
    status: "pending"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://i.pravatar.cc/150?img=22",
    lastPayout: "Feb 4, 2026",
    time: "4:00 PM",
    total: 2350,
    method: "PayPal",
    status: "confirmed"
  }
]

function PayoutTable() {
  return (
<div className="w-[calc(100vw-24px)] lg:w-full overflow-x-auto scroll-hide">
  <table className="min-w-[700px] w-full bg-white border border-[#0000001A] lg:rounded-[14px] rounded-lg border-separate border-spacing-0">
    
    <thead>
      <tr className="bg-gray-50 text-xs text-[#4A5565]">
        <th className="px-6 py-4 text-left font-medium">PROVIDER</th>
        <th className="px-6 py-4 text-left font-medium">LAST PAYOUT</th>
        <th className="px-6 py-4 text-left font-medium">TIME</th>
        <th className="px-6 py-4 text-left font-medium">TOTAL PAYOUT</th>
        <th className="px-6 py-4 text-center font-medium">PAYMENT METHOD</th>
        <th className="px-6 py-4 text-center font-medium">STATUS</th>
      </tr>
    </thead>

    <tbody>
      {payoutData.map((item, index) => (
        <tr
          key={item.id}
          className="text-sm text-[#101828]"
        >
          <td className="px-6 py-4 border-t border-[#E5E7EB]">
            <div className="flex items-center gap-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span>{item.name}</span>
            </div>
          </td>

          <td className="px-6 py-4 border-t border-[#E5E7EB]">
            {item.lastPayout}
          </td>

          <td className="px-6 py-4 border-t border-[#E5E7EB]">
            {item.time}
          </td>

          <td className="px-6 py-4 border-t border-[#E5E7EB]">
            ${item.total}
          </td>

          <td className="px-6 py-4 border-t border-[#E5E7EB] text-center">
            {item.method === "PayPal" ? (
              <span className="bg-[#135DA3] text-white text-xs px-2 py-1 rounded">
                PayPal
              </span>
            ) : (
              <span>Bank Transfer</span>
            )}
          </td>

          <td className="px-6 py-4 border-t border-[#E5E7EB] text-center">
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                item.status === "confirmed"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {item.status}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default PayoutTable