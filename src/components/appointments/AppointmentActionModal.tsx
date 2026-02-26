import { X } from "lucide-react"

type Props = {
  open: boolean
  type: "reschedule" | "cancel" | null
  onClose: () => void
}

function AppointmentActionModal({
  open,
  type,
  onClose
}: Props) {
  if (!open || !type) return null

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 !mt-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[95%] max-w-[510px] rounded-[10px] lg:p-6 p-3 relative"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-[18px] font-bold text-[#0A0A0A]">
            {type === "reschedule"
              ? "Reschedule Appointment"
              : "Cancel Appointment"}
          </h2>
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {type === "reschedule" && (
          <>
            <p className="text-[#717182] text-sm mb-4">
              Select a new date and time for your appointment
            </p>

            <div className="bg-[#F9FAFB] rounded-xl p-3 mb-4">
              <p className="text-[#37393f] mb-1">
                Current Appointment
              </p>
              <p className="text-[#101828] font-medium">
               January 13, 2026 at 2:00 PM
              </p>
            </div>

            <p className="text-[#667085] text-sm mb-4">
              You'll be redirected to select a new date and time from available slots.
            </p>

            <div className="flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-lg text-sm border border-gray-300"
              >
                Cancel
              </button>
              <button className="px-6 py-2 rounded-lg text-sm bg-gradient-to-b from-[#219580] to-[#346079] text-white">
                Done
              </button>
            </div>
          </>
        )}

        {type === "cancel" && (
          <>
            <p className="text-[#717182] text-sm mb-4">
              Are you sure you want to cancel this appointment?
            </p>

            <div className="space-y-2 mb-4">
              <p>
                <span className="font-semibold">Therapist:</span>{" "}
                Dr. Emily Chen
              </p>
              <p>
                <span className="font-semibold">Date:</span>{" "}
               January 13, 2026 at 2:00 PM
              </p>
            </div>

            <div className="bg-[#FEFCE8] border border-[#FFF085] text-[#92400E] rounded-xl p-3 mb-4">
              Cancellations within 24 hours may incur a fee. Please review our cancellation policy.
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-lg text-sm border border-gray-300"
              >
                Keep Appointment
              </button>
              <button className="px-6 py-2 rounded-lg text-sm bg-red-500 text-white">
                Cancel Appointment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default AppointmentActionModal