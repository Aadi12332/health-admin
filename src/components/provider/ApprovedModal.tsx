import { X } from "lucide-react"
import image from "../../assets/images/checkedicon.svg"

type Props = {
  open: boolean
  onClose: () => void
}

function ApprovedModal({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 !mt-0">
      <div onClick={(e)=>e.stopPropagation()} className="bg-white w-[95%] max-w-[400px] rounded-[10px] p-10 relative">
        <div className="flex flex-col gap-2 items-center">
          <img
            src={image}
            alt="license"
          />
          <h2 className="text-[25px] text-[#219580]">
            Approved
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ApprovedModal