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
    <div className="bg-white border border-[#0000001A] rounded-[14px] overflow-hidden">
      <div className="hidden md:grid grid-cols-6 bg-gray-50 px-6 py-4 text-xs text-[#4A5565]">
        <div>PROVIDER</div>
        <div>LAST PAYOUT</div>
        <div>TIME</div>
        <div>TOTAL PAYOUT</div>
        <div className="text-center">PAYMENT METHOD</div>
        <div className="text-center">STATUS</div>
      </div>

      {payoutData.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-1 md:grid-cols-6 px-6 py-5 border-t border-[#E5E7EB] items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-[#101828] text-sm">
              {item.name}
            </span>
          </div>

          <div className="text-[#101828] text-sm">
            {item.lastPayout}
          </div>

          <div className="text-[#101828] text-sm">
            {item.time}
          </div>

          <div className="text-[#101828] text-sm">
            ${item.total}
          </div>

          <div className="text-center">
            {item.method === "PayPal" ? (
              <span className="bg-[#135DA3] text-white text-xs px-1 py-1 rounded">
                PayPal
              </span>
            ) : (
              <span className="text-[#101828] text-sm">
                Bank Transfer
              </span>
            )}
          </div>

          <div className="text-center">
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                item.status === "confirmed"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {item.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PayoutTable