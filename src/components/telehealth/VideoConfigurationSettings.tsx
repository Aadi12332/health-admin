import { useState } from "react"

function Toggle({
  checked,
  onChange
}: {
  checked: boolean
  onChange: () => void
}) {
  return (
    <button
      onClick={onChange}
      className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
        checked ? "bg-[#1E7F78]" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
          checked ? "translate-x-6" : ""
        }`}
      />
    </button>
  )
}

function VideoConfigurationSettings() {
  const [network, setNetwork] = useState({
    autoAdjust: true,
    weakAlert: true,
    hdVideo: true
  })

  const [additional, setAdditional] = useState({
    recording: true,
    blur: false,
    notifyJoin: true,
    screenShare: false,
    muteEntry: true,
    encryption: true
  })

  return (
    <div className="bg-white border border-[##0000001A] rounded-lg lg:rounded-[10px] lg:p-6 p-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-10 gap-5">
        <div className="space-y-8">
          <div>
            <h2 className="text-[18px] font-medium mb-4">
              Video & Audio
            </h2>

            <div className="border border-[##0000001A] lg:rounded-2xl rounded-lg p-3 lg:p-6 space-y-6">
              <div className="flex justify-between items-center gap-3">
                <span>Camera</span>
                <select className="border border-gray-300 rounded-md px-3 py-1">
                  <option>HD Webcam</option>
                </select>
              </div>

              <div className="flex justify-between items-center gap-3">
                <span>Microphones</span>
                <select className="border border-gray-300 rounded-md px-3 py-1">
                  <option>Built-In Mic</option>
                </select>
              </div>

              <div className="flex justify-between items-center gap-3">
                <span>Speakers</span>
                <select className="border border-gray-300 rounded-md px-3 py-1">
                  <option>System Output</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[18px] font-medium mb-4">
              Network
            </h2>

            <div className="border border-[##0000001A] lg:rounded-2xl rounded-lg p-3 lg:p-6 space-y-6">
              <div className="flex justify-between items-center gap-3">
                <span>
                  Auto adjust resolution for slow networks
                </span>
                <Toggle
                  checked={network.autoAdjust}
                  onChange={() =>
                    setNetwork({
                      ...network,
                      autoAdjust: !network.autoAdjust
                    })
                  }
                />
              </div>

              <div className="flex justify-between items-center gap-3">
                <span>
                  Alert when connection is weak
                </span>
                <Toggle
                  checked={network.weakAlert}
                  onChange={() =>
                    setNetwork({
                      ...network,
                      weakAlert: !network.weakAlert
                    })
                  }
                />
              </div>

              <div className="flex justify-between items-center gap-3">
                <span>Enable HD video</span>
                <Toggle
                  checked={network.hdVideo}
                  onChange={() =>
                    setNetwork({
                      ...network,
                      hdVideo: !network.hdVideo
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[18px] font-medium mb-4">
            Additional Settings
          </h2>

          <div className="border border-[##0000001A] lg:rounded-2xl rounded-lg p-3 lg:p-6 space-y-6">
            {[
              {
                label: "Allow session recording",
                key: "recording"
              },
              {
                label: "Enable background blur",
                key: "blur"
              },
              {
                label:
                  "Notify when patient join the call",
                key: "notifyJoin"
              },
              {
                label: "Screen Sharing",
                key: "screenShare"
              },
              {
                label: "Mute on Entry",
                key: "muteEntry"
              },
              {
                label: "End to End encryption",
                key: "encryption"
              }
            ].map((item) => (
              <div
                key={item.key}
                className="flex justify-between items-center gap-3"
              >
                <span>{item.label}</span>
                <Toggle
                  checked={
                    additional[
                      item.key as keyof typeof additional
                    ]
                  }
                  onChange={() =>
                    setAdditional({
                      ...additional,
                      [item.key]:
                        !additional[
                          item.key as keyof typeof additional
                        ]
                    })
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-gradient-to-b from-[#219580] to-[#346079] text-white px-12 py-3 rounded-xl">
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default VideoConfigurationSettings