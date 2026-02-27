import { Download } from "lucide-react"

type Refund = {
  id: number
  provider: string
  patient: string
  reason: string
  amount: number
  status: "paid" | "pending"
  date: string
  disputeId: string
  card: string
}

const refundData: Refund[] = [
  {
    id: 1,
    provider: "Dr. Emily Chen",
    patient: "John Smith",
    reason: "Video consultation failed",
    amount: 120,
    status: "paid",
    date: "Jan 10, 2026",
    disputeId: "I53465001",
    card: "Visa •••• 4242"
  },
  {
    id: 2,
    provider: "Dr. Emily Chen",
    patient: "John Smith",
    reason: "Video consultation failed",
    amount: 120,
    status: "pending",
    date: "Jan 10, 2026",
    disputeId: "I53465001",
    card: "Visa •••• 4242"
  },
  {
    id: 3,
    provider: "Dr. Emily Chen",
    patient: "John Smith",
    reason: "Video consultation failed",
    amount: 120,
    status: "paid",
    date: "Jan 10, 2026",
    disputeId: "I53465001",
    card: "Visa •••• 4242"
  },
  {
    id: 4,
    provider: "Dr. Emily Chen",
    patient: "John Smith",
    reason: "Video consultation failed",
    amount: 120,
    status: "pending",
    date: "Jan 10, 2026",
    disputeId: "I53465001",
    card: "Visa •••• 4242"
  }
]

function RefundList() {
  return (
    <div className="space-y-6">
      {refundData.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-[#E5E7EB] rounded-2xl p-6 flex flex-col gap-5"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h3 className="text-[16px] text-[#101828]">
                  {item.provider}
                </h3>
                <p className="text-[#4A5565] text-sm">Provider</p>
              </div>

              <div>
                <h3 className="text-[16px] text-[#101828]">
                  {item.patient}
                </h3>
                <p className="text-[#4A5565] text-sm">Patient</p>
              </div>

              <div>
                <h3 className="text-[16px] text-[#101828]">
                  {item.reason}
                </h3>
                <p className="text-[#4A5565] text-sm">Reason</p>
              </div>

              <div>
                <h3 className="text-[20px] text-[#101828]">
                  ${item.amount}
                </h3>
                <p className="text-[#4A5565] text-sm">Refund Amount</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {item.status === "paid" ? (
                <span className="bg-[#DCFCE7] text-[#008236] px-4 py-1 rounded-full text-xs min-w-[85px] text-center inline-block">
                  Paid
                </span>
              ) : (
                <button className="border border-[#2F76CC] text-[#2F76CC] px-4 py-1 rounded-full text-xs min-w-[85px] text-center inline-block">
                  Pay Now
                </button>
              )}

              <button className="flex items-center gap-2 border border-[#0000001A] px-4 py-1 rounded-lg text-[#0A0A0A] text-sm">
                <Download size={16} />
                Receipt
              </button>
            </div>
          </div>

          <div className="text-[#4A5565] text-sm flex flex-wrap gap-3">
            <span>{item.date}</span>
            <span>•</span>
            <span>Dispute: {item.disputeId}</span>
            <span>•</span>
            <span>{item.card}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RefundList