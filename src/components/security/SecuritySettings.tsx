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

function SecuritySettings() {
  const [autoLogout, setAutoLogout] = useState("15")
  const [twoFactor, setTwoFactor] = useState(true)
  const [otp, setOtp] = useState(true)

  return (
    <div className="bg-white border border-[#0000001A] rounded-[14px] p-6">

      <div className="grid md:grid-cols-2 gap-6">

        {/* Security Settings */}
        <div>
          <h2 className="text-lg mb-4">Security Settings</h2>

          <div className="border border-[#0000001A] rounded-[14px] p-6 space-y-8">

            {/* Auto Log Off */}
            <div className="flex items-center justify-between">
              <p>Automatic log off</p>

              <select
                value={autoLogout}
                onChange={(e) => setAutoLogout(e.target.value)}
                className="border border-[#0000001A] rounded-md px-4 py-2 outline-none"
              >
                <option value="5">5 Mins</option>
                <option value="10">10 Mins</option>
                <option value="15">15 Mins</option>
                <option value="30">30 Mins</option>
              </select>
            </div>

            {/* Two Factor */}
            <div className="flex items-center justify-between">
              <p>Two factor Authentication</p>
              <Toggle enabled={twoFactor} onChange={setTwoFactor} />
            </div>

            {/* OTP */}
            <div className="flex items-center justify-between">
              <p>OTP Verification</p>
              <Toggle enabled={otp} onChange={setOtp} />
            </div>

          </div>
        </div>

        {/* Data Security */}
        <div>
          <h2 className="text-lg mb-4">Data Security</h2>

          <div className="border border-[#0000001A] rounded-[14px] p-6 space-y-8">

            <div className="flex items-center justify-between">
              <p>All Patients Data</p>
              <span className="border border-[#0000001A] px-4 py-2 rounded-md">
                Encrypted
              </span>
            </div>

            <div className="flex items-center justify-between">
              <p>Daily Backup</p>
              <span className="border border-[#0000001A] px-4 py-2 rounded-md">
                Encrypted
              </span>
            </div>

            <div className="flex items-center justify-between">
              <p>Medical Records</p>
              <span className="border border-[#0000001A] px-4 py-2 rounded-md">
                Encrypted
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default SecuritySettings