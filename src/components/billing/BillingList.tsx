import { Download } from "lucide-react"

type Payment = {
  provider: string
  patient: string
  date: string
  invoice: string
  card: string
  amount: number
  status: "Paid" | "Pending"
}

const payments: Payment[] = [
  {
    provider: "Dr. Emily Chen",
    patient: "John Smith",
    date: "Jan 10, 2026",
    invoice: "INV-2026-001",
    card: "Visa •••• 4242",
    amount: 120,
    status: "Paid"
  },
  {
    provider: "Dr. Emily Chen",
    patient: "John Smith",
    date: "Jan 10, 2026",
    invoice: "INV-2026-001",
    card: "Visa •••• 4242",
    amount: 120,
    status: "Paid"
  },
  {
    provider: "Dr. Emily Chen",
    patient: "John Smith",
    date: "Jan 10, 2026",
    invoice: "INV-2026-001",
    card: "Visa •••• 4242",
    amount: 120,
    status: "Paid"
  },
  {
    provider: "Dr. Emily Chen",
    patient: "John Smith",
    date: "Jan 10, 2026",
    invoice: "INV-2026-001",
    card: "Visa •••• 4242",
    amount: 120,
    status: "Paid"
  }
]

function BillingList() {
  return (
    <div className="space-y-5">
      {payments.map((item, i) => (
        <div
          key={i}
          className="bg-white border border-[#0000001A] rounded-[14px] p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        >
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:gap-20 gap-4">
              <div>
                <h3 className="text-[18px] text-[#101828]">
                  {item.provider}
                </h3>
                <p className="text-[#667085]">Provider</p>
              </div>

              <div>
                <h3 className="text-[18px] text-[#101828]">
                  {item.patient}
                </h3>
                <p className="text-[#667085]">Patient</p>
              </div>
            </div>

            <div className="mt-4 text-[#667085] text-sm flex flex-wrap gap-3">
              <span>{item.date}</span>
              <span>•</span>
              <span>Invoice: {item.invoice}</span>
              <span>•</span>
              <span>{item.card}</span>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3">
            <h2 className="text-2xl font-semibold text-[#101828]">
              ${item.amount}
            </h2>

            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  item.status === "Paid"
                    ? "bg-[#DCFCE7] text-[#008236]"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {item.status}
              </span>

              <button className="flex items-center gap-2 border border-[#0000001A] px-4 py-1 rounded-lg text-sm">
                <Download size={16} />
                Receipt
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BillingList