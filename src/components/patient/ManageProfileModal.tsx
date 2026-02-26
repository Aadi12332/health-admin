import { X, Phone, Video, Edit } from "lucide-react"

type Props = {
  open: boolean
  onClose: () => void
  data: {
    name: string
    email: string
    image: string
    dob: string
    gender: string
    address: string
    insurance: string
    ssn: string
    mobile: string
    maritalStatus: string
    registeredOn: string
  }
}

function ManageProfileModal({ open, onClose, data }: Props) {
  if (!open) return null

  const fields = [
    { label: "Date of Birth", value: data.dob },
    { label: "Gender", value: data.gender },
    { label: "Address", value: data.address },
    { label: "Insurance", value: data.insurance },
    { label: "SSN", value: data.ssn },
    { label: "Mobile", value: data.mobile },
    { label: "Marital Status", value: data.maritalStatus },
    { label: "Registered on", value: data.registeredOn }
  ]

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 !mt-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[95%] max-w-[778px] rounded-[14px] p-6 relative"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[20px] text-[#101828]">
            Manage Profile
          </h2>
          <button onClick={onClose}>
            <X size={28} className="text-[#3C3C3C]" />
          </button>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-5 items-center">
            <img
              src={data.image}
              alt={data.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-[18px] font-medium text-[#101828]">
                {data.name}
              </h3>
              <div className="flex items-center gap-2 text-[#667085]">
                {data.email}
                <Edit size={14} className="text-[#219580]" />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-[#F2F4F7] p-3 rounded-lg">
              <Phone size={20} className="text-[#219580]" />
            </button>
            <button className="bg-[#F2F4F7] p-3 rounded-lg">
              <Video size={20} className="text-[#219580]" />
            </button>
          </div>
        </div>

        <div className="border-t border-[#E5E7EB] pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {fields.map((item, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 text-[#667085] mb-1">
                  {item.label}
                  <Edit size={14} className="text-[#219580]" />
                </div>
                <p className="text-[#101828] text-[16px]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-gradient-to-b from-[#219580] to-[#346079] text-white px-10 py-3 rounded-xl text-[16px] font-medium">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default ManageProfileModal