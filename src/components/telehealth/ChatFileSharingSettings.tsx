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

function ChatFileSharingSettings() {
  const [chat, setChat] = useState({
    enableChat: true,
    oneWay: false,
    templates: true,
    history: false,
    emojis: true,
    deleteConversation: true
  })

  const [fileSharing, setFileSharing] = useState({
    secure: true,
    images: false,
    documents: true,
    virusScan: false,
    allTypes: true,
    videos: true
  })

  return (
    <div className="bg-white border border-[##0000001A] rounded-[10px] p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-[18px] font-medium mb-4">Chat</h2>

          <div className="border border-[##0000001A] rounded-2xl p-6 space-y-8">
            {[
              { label: "Enable chat for virtual consultation", key: "enableChat" },
              { label: "One- way patient chat", key: "oneWay" },
              { label: "Templated messages", key: "templates" },
              { label: "Chat history access", key: "history" },
              { label: "Emojis", key: "emojis" },
              { label: "Delete conversation", key: "deleteConversation" }
            ].map((item) => (
              <div key={item.key} className="flex justify-between items-center">
                <span>{item.label}</span>
                <Toggle
                  checked={chat[item.key as keyof typeof chat]}
                  onChange={() =>
                    setChat({
                      ...chat,
                      [item.key]:
                        !chat[item.key as keyof typeof chat]
                    })
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[18px] font-medium mb-4">File Sharing</h2>

          <div className="border border-[##0000001A] rounded-2xl p-6 space-y-8">
            {[
              { label: "Enable Secure file sharing", key: "secure" },
              { label: "Upload medical images", key: "images" },
              { label: "Upload medical documents", key: "documents" },
              { label: "Automatic virus scan before sharing", key: "virusScan" },
              { label: "Allow all file types", key: "allTypes" },
              { label: "Upload videos", key: "videos" }
            ].map((item) => (
              <div key={item.key} className="flex justify-between items-center">
                <span>{item.label}</span>
                <Toggle
                  checked={
                    fileSharing[item.key as keyof typeof fileSharing]
                  }
                  onChange={() =>
                    setFileSharing({
                      ...fileSharing,
                      [item.key]:
                        !fileSharing[
                          item.key as keyof typeof fileSharing
                        ]
                    })
                  }
                />
              </div>
            ))}
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

export default ChatFileSharingSettings