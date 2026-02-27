import { useState } from "react"

function Toggle({ enabled, onChange }: any) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`w-[46px] h-6 flex items-center rounded-full transition ${
        enabled ? "bg-[#219580]" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  )
}

function MessageSettings() {
  const [activeTemplateTab, setActiveTemplateTab] = useState("sms")
  const [activeNotifyTab, setActiveNotifyTab] = useState("provider")

  const templateItems = [
    {
      title: "Appointment Reminder",
      desc: "Type: Patient  |  Frequency: 1 day Before"
    },
    {
      title: "Consult Summary",
      desc: "Type: Patient  |  Frequency: Post Consult"
    },
    {
      title: "Account Invite",
      desc: "Type: Provider  |  Frequency: Once"
    }
  ]

  const appointmentAlerts = ["One day before", "One hour Before"]

  const announcements = [
    {
      title: "Network Maintenance",
      desc: "Scheduled maintenance from 1 AM to 3 AM on April 14"
    },
    {
      title: "Policy Update",
      desc: "Revised privacy policy and terms and it will be effective from April 16"
    }
  ]

  const notifyItems = [
    "Appointment Reminder",
    "New Message Alerts",
    "Account Updates"
  ]

  return (
    <div className="bg-white border border-[#0000001A] rounded-[14px] p-6">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[18px]">Message Templates</h2>

            <div className="bg-[#E5E7EB] p-1 rounded-full flex">
              <button
                onClick={() => setActiveTemplateTab("email")}
                className={`px-5 py-1 rounded-full text-sm ${
                  activeTemplateTab === "email"
                    ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
                    : ""
                }`}
              >
                Email Templates
              </button>
              <button
                onClick={() => setActiveTemplateTab("sms")}
                className={`px-5 py-1 rounded-full text-sm ${
                  activeTemplateTab === "sms"
                    ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
                    : ""
                }`}
              >
                SMS Templates
              </button>
            </div>
          </div>

          <div className="border border-[#0000001A] rounded-[14px] p-6 space-y-6">
            {templateItems.map((item, i) => (
              <div key={i} className="flex justify-between items-start">
                <div>
                  <h3 className="text-[16px]">{item.title}</h3>
                  <p className="text-[#667085] text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
                <Toggle enabled={true} onChange={() => {}} />
              </div>
            ))}

            <button className="w-full bg-gradient-to-b from-[#219580] to-[#346079] text-white py-3 rounded-lg">
              Add New Template
            </button>
          </div>

          <h3 className="mt-8 mb-4 text-[16px]">
            Appointment Reminders & Alerts
          </h3>

          <div className="border border-[#0000001A] rounded-[14px] p-6 space-y-6">
            {appointmentAlerts.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <p>{item}</p>
                <Toggle enabled={true} onChange={() => {}} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[18px] mb-8">Announcements</h2>

          <div className="border border-[#0000001A] rounded-[14px] p-6 space-y-6">
            {announcements.map((item, i) => (
              <div key={i} className="flex justify-between">
                <div>
                  <h3 className="text-[16px]">{item.title}</h3>
                  <p className="text-[#667085] text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
                <Toggle enabled={true} onChange={() => {}} />
              </div>
            ))}

            <div className="flex gap-4">
              <button className="flex-1 bg-gradient-to-b from-[#219580] to-[#346079] text-white py-2 rounded-lg">
                Add New Announcement
              </button>
              <button className="flex-1 border border-[#219580] text-[#219580] py-2 rounded-lg">
                Notify All Users
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 mb-4">
            <h3 className="text-[16px]">Notification Settings</h3>

            <div className="bg-[#E5E7EB] p-1 rounded-full flex">
              <button
                onClick={() => setActiveNotifyTab("patient")}
                className={`px-5 py-1 rounded-full text-sm ${
                  activeNotifyTab === "patient"
                    ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
                    : ""
                }`}
              >
                Patient
              </button>
              <button
                onClick={() => setActiveNotifyTab("provider")}
                className={`px-5 py-1 rounded-full text-sm ${
                  activeNotifyTab === "provider"
                    ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
                    : ""
                }`}
              >
                Provider
              </button>
            </div>
          </div>

          <div className="border border-[#0000001A] rounded-[14px] p-6 space-y-6">
            {notifyItems.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <p>{item}</p>
                <Toggle enabled={true} onChange={() => {}} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageSettings