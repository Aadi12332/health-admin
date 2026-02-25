import { Search, Bell } from "lucide-react"

function Header() {
  return (
    <header className="h-[64px] border-b border-[#E5E7EB] bg-white lg:px-8 px-3 flex items-center justify-between">
      <div className="relative w-[520px] bg-[#F9FAFB]">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          placeholder="Search therapist, appointment, prescription..."
          className="w-full h-[44px] pl-11 pr-4 rounded-lg bg-[#F9FAFB] border text-base border-[#E5E7EB] focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Bell size={20} className="text-gray-600" />
          <span style={{background:"linear-gradient(180deg, #219580 0%, #346079 100%)"}} className="absolute -top-3 -right-3 bg-teal-600 text-white text-[12px] w-5 h-5 rounded-lg flex items-center justify-center">
            2
          </span>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">
              Sarah Johnson
            </p>
            <p className="text-xs text-gray-500">
              sarah.j@email.com
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header