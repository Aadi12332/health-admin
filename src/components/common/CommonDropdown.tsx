import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

type Props = {
  options: string[]
  placeholder: string
  value?: string
  onChange?: (value: string) => void
  width?: string
}

function CommonDropdown({
  options,
  placeholder,
  value,
  onChange,
  width = "w-[220px]"
}: Props) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(value || "")
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelect = (option: string) => {
    setSelected(option)
    onChange?.(option)
    setOpen(false)
  }

  return (
    <div ref={ref} className={`relative ${width}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full h-[32px] bg-[#F3F3F5] rounded-[6px] px-3 flex items-center justify-between text-[#717182] text-[12px]"
      >
        <span>{selected || placeholder}</span>
        <ChevronDown size={14} color="#717182" />
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-full bg-white rounded-xl shadow-lg border border-[#E5E7EB] overflow-hidden z-50">
          {options.map((option, index) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={`px-4 py-3 text-sm text-[#344054] cursor-pointer hover:bg-gray-50 ${
                index !== options.length - 1 ? "border-b border-[#F2F4F7]" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CommonDropdown