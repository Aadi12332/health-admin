import { NavLink, useNavigate } from "react-router-dom"
import {
  LayoutDashboard,
  Stethoscope,
  CalendarDays,
  Video,
  Settings,
  Receipt,
  Bell,
  BarChart3,
  Shield
} from "lucide-react"
import Logo from "../assets/images/logo.svg"

const menu = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Provider Management", path: "/providers", icon: Stethoscope },
  { name: "Patient Management", path: "/patients", icon: CalendarDays },
  { name: "Appointments & Consultations", path: "/appointments", icon: Video },
  { name: "Telehealth Configuration", path: "/telehealth", icon: Settings },
  { name: "Billing & Revenue Management", path: "/billing", icon: Receipt },
  { name: "Notification & Communication", path: "/notifications", icon: Bell },
  { name: "Reports & Analytics", path: "/reports", icon: BarChart3 },
  { name: "Security & Compliance", path: "/security", icon: Shield }
]

function Sidebar() {
  const navigate = useNavigate()
  return (
    <aside className="w-[255px] min-w-[255px] bg-white border-r border-[#E5E7EB] h-screen flex flex-col">
      <div className="p-6">
        <img src={Logo} alt="logo" className="w-[173px] cursor-pointer" onClick={() => navigate("/")} />
      </div>

      <div className="border-t border-[#E5E7EB]" />

      <nav className="flex-1 py-6 space-y-2 overflow-y-auto">
        {menu.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 h-[48px] text-[15px] transition ${
                  isActive
                    ? "text-white"
                    : "text-[#4A5565] hover:bg-gray-100"
                }`
              }
              style={({ isActive }) =>
                isActive
                  ? {
                      background:
                        "linear-gradient(180deg, #219580 0%, #346079 100%)"
                    }
                  : undefined
              }
            >
              <Icon size={20} className="min-w-5" />
              {item.name}
            </NavLink>
          )
        })}
      </nav>

      <div className="border-t border-[#E5E7EB] p-4 text-center text-sm text-gray-400">
        © 2026 MindCare
      </div>
    </aside>
  )
}

export default Sidebar