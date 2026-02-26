import { X } from "lucide-react"

type Props = {
  open: boolean
  onClose: () => void
}

function ConsultationHistoryModal({
  open,
  onClose,
}: Props) {
  if (!open) return null

  const history = [
    { date: "Feb 2, 2026", time: "10:00 AM", type: "Initial Consultation" },
    { date: "Feb 2, 2026", time: "11:30 AM", type: "Follow-up" },
    { date: "Feb 3, 2026", time: "2:00 PM", type: "Therapy Session" },
    { date: "Feb 1, 2026", time: "2:00 PM", type: "Therapy Session" },
    { date: "Feb 4, 2026", time: "4:00 PM", type: "Medication Review" }
  ]

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 !mt-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[95%] max-w-[946px] rounded-[10px] p-8 relative"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[20px] text-[#000000]">
            Consultation History
          </h2>
          <button onClick={onClose}>
            <X size={28} className="text-[#3C3C3C]" />
          </button>
        </div>

        <p className="text-[#667085] mb-6">
          Patient:{" "}
          <span className="text-[#101828] font-medium">
            Leslie Martin
          </span>
          <span className="mx-2">|</span>
          Provider:{" "}
          <span className="text-[#101828] font-medium">
            Dr. Michael Ross
          </span>
        </p>

        <div className="rounded-xl overflow-hidden border border-[#E5E7EB]">
          <div className="grid grid-cols-3 bg-[#F2F4F7] px-6 py-3 text-[#667085] text-sm">
            <div>DATE</div>
            <div>TIME</div>
            <div>TYPE</div>
          </div>

          {history.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-3 px-6 py-4 border-t border-[#E5E7EB] text-[#344054]"
            >
              <div>{item.date}</div>
              <div>{item.time}</div>
              <div>{item.type}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConsultationHistoryModal