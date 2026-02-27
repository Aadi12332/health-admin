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

function DataSecurityAdvanced() {
  const [encryptionEnabled, setEncryptionEnabled] = useState(true)
  const [tlsEnabled, setTlsEnabled] = useState(false)
  const [incrementalBackup, setIncrementalBackup] = useState(true)

  return (
    <div className="bg-white border border-[#0000001A] rounded-[14px] p-6 space-y-8">

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <h2 className="text-lg mb-4">Data Encryption</h2>

          <div className="border border-[#0000001A] rounded-[8px] p-3 space-y-6">

            <div className="flex justify-between items-center">
              <p>Encryption Status</p>
              <Toggle enabled={encryptionEnabled} onChange={setEncryptionEnabled} />
            </div>

            <div className="flex justify-between items-center">
              <p>Encryption Protocols</p>
              <select className="border border-[#0000001A] rounded-md px-2 py-2 outline-none text-sm max-w-[250px]">
                <option>AES-256 (Advanced Encryption Standards)</option>
                <option>AES-128</option>
                <option>RSA-2048</option>
              </select>
            </div>

            <div className="flex justify-between items-center">
              <p>Encrypt Data In-Transit (TLS)</p>
              <Toggle enabled={tlsEnabled} onChange={setTlsEnabled} />
            </div>

          </div>
        </div>

        <div>
          <h2 className="text-lg mb-4">Logs</h2>

          <div className="border border-[#0000001A] rounded-[8px] p-3 space-y-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex justify-between">
                <p>April 14, 2024/2:00 UTC</p>
                <p className="text-[#219580]">
                  End to End Encrypted (AES-256)
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg mb-4">Automated Data Backups</h2>
          <div className="border border-[#0000001A] rounded-[8px] p-3 space-y-6">
            <div>
              <p className="mb-3">Backup Schedule</p>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-gray-600">Frequency</span>
                <select className="border border-[#0000001A] rounded-md px-4 py-2">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>

                <select className="border border-[#0000001A] rounded-md px-4 py-2">
                  <option>2.00AM</option>
                  <option>4.00AM</option>
                  <option>12.00AM</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p>Enable Incremental Backups</p>
              <Toggle
                enabled={incrementalBackup}
                onChange={setIncrementalBackup}
              />
            </div>

            <div className="flex justify-between items-center">
              <p>Retention Period</p>
              <select className="border border-[#0000001A] rounded-md px-4 py-2">
                <option>30 Days</option>
                <option>60 Days</option>
                <option>90 Days</option>
                <option>180 Days</option>
              </select>
            </div>

            <div className="flex justify-between">
              <p>Backup Storage</p>
              <p>Encrypted offsite storage</p>
            </div>

            <div className="flex justify-between text-gray-600">
              <p>Secure Tenbiz Cloud Storage</p>
              <p>450GB/2TB</p>
            </div>

          </div>
        </div>

        <div>
          <h2 className="text-lg mb-4">Logs</h2>

          <div className="border border-[#0000001A] rounded-[8px] p-3 space-y-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex justify-between">
                <p>April 14, 2024/2:00 UTC</p>
                <p className="text-[#219580]">Backup Successful</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}

export default DataSecurityAdvanced