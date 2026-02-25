import { X } from "lucide-react"

type Props = {
  open: boolean
  onClose: () => void
  image: string
}

function LicenseModal({ open, onClose, image }: Props) {
  if (!open) return null

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 !mt-0">
      <div onClick={(e)=>e.stopPropagation()} className="bg-white w-[95%] max-w-[778px] rounded-[10px] p-8 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[20px] text-[#000000]">
            License and Credentials
          </h2>
          <button onClick={onClose}>
            <X size={28} className="text-[#3C3C3C]" />
          </button>
        </div>

        <div className="-space-y-[270px] flex flex-col justify-center items-center w-fit mx-auto shadow-md rounded-[24px]">
          <img
            src={image}
            alt="license"
            className="max-h-[349px] rounded-[24px] brightness-50"
          />
          <img
            src={image}
            alt="license"
            className="max-h-[349px] rounded-[24px] brightness-75"
          />
          <img
            src={image}
            alt="license"
            className="max-h-[349px] rounded-[24px] brightness-100"
          />
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-gradient-to-b from-[#219580] to-[#346079] text-white px-10 h-[44px] rounded-xl text-[16px] font-medium">
            Verify
          </button>
        </div>
      </div>
    </div>
  )
}

export default LicenseModal