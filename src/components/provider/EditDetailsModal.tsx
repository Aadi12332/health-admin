import { X } from "lucide-react"
import CommonDropdown from "../common/CommonDropdown"
import { useState } from "react"

type Props = {
  open: boolean
  onClose: () => void
}

function EditDetailsModal({ open, onClose }: Props) {
  const [account, setAccount] = useState("Enable")
  const [pricing, setPricing] = useState("Fixed")

  if (!open) return null

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 !mt-0">
      <div onClick={(e)=>e.stopPropagation()} className="bg-white w-[95%] max-w-[564px] rounded-[10px] p-8 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[20px] text-[#000000]">
            Edit Details
          </h2>
          <button onClick={onClose}>
            <X size={28} className="text-[#3C3C3C]" />
          </button>
        </div>

        <div className="mt-12 space-y-9">
          <div>
            <h3 className="text-[16px] text-black mb-3">
              Assign
            </h3>

            <div className="flex gap-10">
              <CommonDropdown
                placeholder="Specialty"
                options={[
                  "Psychiatry",
                  "Clinical Psychology",
                  "Therapist"
                ]}
                width="w-[340px]"
              />

              <CommonDropdown
                placeholder="Consultation"
                options={[
                  "Video Consultation",
                  "In-Person",
                  "Hybrid"
                ]}
                width="w-[340px]"
              />
            </div>
          </div>

          <div className="flex justify-between gap-10">
            <div className="flex-1">
              <h3 className="text-[16px] text-black mb-3">
                Accounts
              </h3>

              <div className="flex gap-14 text-[16px] text-[#5F6D7E]">
                {["Enable", "Disable"].map((option) => (
                  <label key={option} className="flex items-center gap-2 text-sm text-[#4A5565]">
                    <input
                      type="radio"
                      name="account"
                      checked={account === option}
                      onChange={() => setAccount(option)}
                      className="w-4 h-4 accent-[#219580]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-[16px] text-black mb-3">
                Pricing
              </h3>

              <div className="flex gap-14 text-[24px] text-[#5F6D7E]">
                {["Fixed", "Variable"].map((option) => (
                  <label key={option} className="flex items-center gap-2 text-sm text-[#4A5565]">
                    <input
                      type="radio"
                      name="pricing"
                      checked={pricing === option}
                      onChange={() => setPricing(option)}
                      className="w-4 h-4 accent-[#219580]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-6">
            <button className="w-[207px] h-[36px] bg-gradient-to-b from-[#219580] to-[#346079] text-white rounded-lg text-[14px]">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditDetailsModal