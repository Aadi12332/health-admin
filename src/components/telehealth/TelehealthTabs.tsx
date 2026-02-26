import { useState } from "react"
import { Video, Hourglass, LucideMessageSquareText } from "lucide-react"
import VideoConfigurationSettings from "./VideoConfigurationSettings"
import WaitingRoomSettings from "./WaitingRoomSettings"
import ChatFileSharingSettings from "./ChatFileSharingSettings"

function TelehealthTabs() {
  const [active, setActive] = useState<
    "video" | "waiting" | "chat"
  >("video")

  const tabs = [
    {
      key: "video",
      label: "Video Configuration Settings",
      icon: Video
    },
    {
      key: "waiting",
      label: "Virtual waiting room",
      icon: Hourglass
    },
    {
      key: "chat",
      label: "Chat and file sharing",
      icon: LucideMessageSquareText
    }
  ]

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = active === tab.key

          return (
            <button
              key={tab.key}
              onClick={() =>
                setActive(
                  tab.key as "video" | "waiting" | "chat"
                )
              }
              className={`flex items-center justify-center text-[18px] gap-4 p-6 h-[122px] rounded-[10px] border text-left transition ${
                isActive
                  ? "border-[#219580] bg-[#F4F8F8]"
                  : "border-[#E5E7EB] bg-white"
              }`}
            >
              <Icon
                size={22}
                className={
                  isActive
                    ? "text-[#219580]"
                    : "text-[#667085]"
                }
              />
              <span
                className={`text-[18px] text-[#101828]`}
              >
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>

      <div className="mt-8">
        {active === "video" && <VideoConfigurationSettings />}
        {active === "waiting" && <WaitingRoomSettings />}
        {active === "chat" && <ChatFileSharingSettings />}
      </div>
    </div>
  )
}

export default TelehealthTabs
