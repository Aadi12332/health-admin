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

const permissionSections = [
  {
    title: "User & Account Management",
    items: [
      "View Medical Records",
      "Create Medical Records",
      "Delete Medical Records",
      "Upload Documents"
    ]
  },
  {
    title: "Patient Data & Medical Records",
    items: [
      "View Appointments",
      "Create Appointments",
      "Delete Appointments"
    ]
  },
  {
    title: "Prescription & Orders",
    items: [
      "View Prescription",
      "Create Prescription",
      "Delete Prescription"
    ]
  }
]

function PermissionsManagement() {
  const [permissions, setPermissions] = useState<any>(() => {
    const initial: any = {}
    permissionSections.forEach(section => {
      section.items.forEach(item => {
        initial[item] = {
          provider: true,
          patient: true
        }
      })
    })
    return initial
  })

  const handleToggle = (
    item: string,
    role: "provider" | "patient",
    value: boolean
  ) => {
    setPermissions((prev: any) => ({
      ...prev,
      [item]: {
        ...prev[item],
        [role]: value
      }
    }))
  }

  return (
    <div className="space-y-10">

      {permissionSections.map((section, index) => (
        <div key={index}>
          <h2 className="text-[18px] mb-4">{section.title}</h2>

          <div className="bg-white border border-[#0000001A] rounded-[14px] p-6">

            <div className="grid grid-cols-3 mb-6 font-medium text-[#667085]">
              <div></div>
              <div className="text-center">Provider</div>
              <div className="text-center">Patient</div>
            </div>

            {section.items.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-3 items-center py-4"
              >
                <div>{item}</div>

                <div className="flex justify-center">
                  <Toggle
                    enabled={permissions[item]?.provider}
                    onChange={(val: boolean) =>
                      handleToggle(item, "provider", val)
                    }
                  />
                </div>

                <div className="flex justify-center">
                  <Toggle
                    enabled={permissions[item]?.patient}
                    onChange={(val: boolean) =>
                      handleToggle(item, "patient", val)
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  )
}

export default PermissionsManagement