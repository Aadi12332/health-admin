import { useState } from "react"

function WaitingRoomSettings() {
  const [form, setForm] = useState({
    maxWaiting: "20 Mins",
    music: "Calm Instrumental",
    defaultWait: "15 Mins",
    queue: "Enable",
    message:
      "Welcome to healthcare clinic, your provider will be with you shortly"
  })

  return (
    <div className="bg-white border border-[##0000001A] rounded-[10px] p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-[18px] font-medium mb-4">
            Background & Welcome Message
          </h2>

          <div className="border border-[##0000001A] rounded-2xl p-6">
            <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,#f3f4f6_25%,transparent_25%,transparent_50%,#f3f4f6_50%,#f3f4f6_75%,transparent_75%,transparent)] bg-[length:40px_40px] opacity-40" />
              <button className="relative border border-[#219580] text-[#219580] px-6 py-2 rounded-lg bg-white">
                Upload Image
              </button>
            </div>

            <div>
              <p className="mb-3 text-[16px]">
                Custom Welcome Message
              </p>

              <textarea
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                rows={3}
                className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#219580]"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[18px] font-medium mb-4">
            General Settings
          </h2>

          <div className="border border-[##0000001A] rounded-2xl p-6 space-y-8">
            <div className="flex justify-between items-center">
              <span>Max Waiting Time</span>
              <select
                value={form.maxWaiting}
                onChange={(e) =>
                  setForm({
                    ...form,
                    maxWaiting: e.target.value
                  })
                }
                className="border border-gray-300 rounded-md px-3 py-1"
              >
                <option>10 Mins</option>
                <option>15 Mins</option>
                <option>20 Mins</option>
                <option>30 Mins</option>
              </select>
            </div>

            <div className="flex justify-between items-center">
              <span>Play background music</span>
              <select
                value={form.music}
                onChange={(e) =>
                  setForm({ ...form, music: e.target.value })
                }
                className="border border-gray-300 rounded-md px-3 py-1"
              >
                <option>Calm Instrumental</option>
                <option>Soft Piano</option>
                <option>Nature Sounds</option>
                <option>None</option>
              </select>
            </div>

            <div className="flex justify-between items-center">
              <span>Default Estimated Wait Time</span>
              <select
                value={form.defaultWait}
                onChange={(e) =>
                  setForm({
                    ...form,
                    defaultWait: e.target.value
                  })
                }
                className="border border-gray-300 rounded-md px-3 py-1"
              >
                <option>5 Mins</option>
                <option>10 Mins</option>
                <option>15 Mins</option>
                <option>20 Mins</option>
              </select>
            </div>

            <div className="flex justify-between items-center">
              <span>Display Queue Numbers</span>
              <select
                value={form.queue}
                onChange={(e) =>
                  setForm({
                    ...form,
                    queue: e.target.value
                  })
                }
                className="border border-gray-300 rounded-md px-3 py-1"
              >
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-gradient-to-b from-[#219580] to-[#346079] text-white px-14 py-3 rounded-xl">
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default WaitingRoomSettings