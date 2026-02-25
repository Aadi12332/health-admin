import { useState } from "react";
import LicenseImage from "../../assets/images/license.jpg";
import { Check, Eye, X } from "lucide-react";
import CommonDropdown from "../common/CommonDropdown";
import LicenseModal from "./LicenseModal";
import PerformanceModal from "./PerformanceModal";
import ApprovedModal from "./ApprovedModal";
import EditDetailsModal from "./EditDetailsModal";

function ProvidersTabs() {
  const [active, setActive] = useState<"pending" | "verified">("pending");

  const [openModal, setOpenModal] = useState(false);
  const [openPerformance, setOpenPerformance] = useState(false);
  const [openApproved, setOpenApproved] = useState(false);
  const [openEdit, setOpenEdit] = useState(false)

  const pendingProviders = [
    {
      id: 1,
      name: "Dr. Emily Chen",
      role: "Provider",
      image: "https://i.pravatar.cc/150?img=12",
      registeredDate: "January 13, 2026",
      status: "Pending",
      licenseStatus: "Not Verified",
      assign: {
        specialty: "Psychiatry",
        consultation: "Video Consultation",
      },
      accounts: "Enable",
      pricing: "Fixed",
    },
    {
      id: 2,
      name: "Dr. Michael Ross",
      role: "Provider",
      image: "https://i.pravatar.cc/150?img=15",
      registeredDate: "January 13, 2026",
      status: "Pending",
      licenseStatus: "Not Verified",
      assign: {
        specialty: "Clinical Psychology",
        consultation: "In-Person Consultation",
      },
      accounts: "Enable",
      pricing: "Fixed",
    },
    {
      id: 3,
      name: "Dr. Sarah Miller",
      role: "Provider",
      image: "https://i.pravatar.cc/150?img=32",
      registeredDate: "January 13, 2026",
      status: "Pending",
      licenseStatus: "Not Verified",
      assign: {
        specialty: "Clinical Psychology",
        consultation: "In-Person Consultation",
      },
      accounts: "Enable",
      pricing: "Fixed",
    },
  ];

  const verifiedProviders = [
    {
      name: "Dr. Emily Chen",
      date: "January 13, 2026",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Dr. Sarah Miller",
      date: "January 13, 2026",
      image: "https://i.pravatar.cc/150?img=32",
    },
  ];

  return (
    <div className="space-y-5">
      <div className="inline-flex bg-[#ECECF0] p-1 rounded-full">
        <button
          onClick={() => setActive("pending")}
          className={`px-8 py-2 rounded-full text-sm ${
            active === "pending"
              ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
              : "text-[#0A0A0A]"
          }`}
        >
          Pending
        </button>

        <button
          onClick={() => setActive("verified")}
          className={`px-8 py-2 rounded-full text-sm ${
            active === "verified"
              ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
              : "text-[#0A0A0A]"
          }`}
        >
          Verified
        </button>
      </div>

      {active === "pending" &&
        pendingProviders.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl border border-[#E5E7EB] p-8 space-y-8"
          >
            <div className="flex justify-between items-center relative">
              <div className="grid grid-cols-2 gap-10 items-center flex-1">
                <div className="flex gap-6 items-center">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-[18px] font-medium text-[#101828]">
                      {p.name}
                    </h3>
                    <p className="text-[#667085] mt-1">{p.role}</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-[18px] font-medium text-[#101828]">
                    Registered
                  </p>
                  <p className="text-[#667085] mt-1">{p.registeredDate}</p>
                </div>
              </div>
              <div className="absolute -top-2 -right-2">
                <span className="bg-[#FEF9C2] text-[#A65F00] border border-[#00000000] px-3 py-1 rounded-full text-sm h-fit">
                  {p.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <p className="text-[18px] font-medium text-[#101828] mb-4">
                  Assign
                </p>

                <div className="flex gap-4">
                  <CommonDropdown
                    placeholder="Specialty"
                    options={[
                      "Provider 1",
                      "Provider 2",
                      "Provider 3",
                      "Provider 4",
                    ]}
                  />

                  <CommonDropdown
                    placeholder="Consultation"
                    options={[
                      "01:00 PM - 02:00 PM",
                      "02:00 PM - 03:00 PM",
                      "03:00 PM - 04:00 PM",
                      "04:00 PM - 05:00 PM",
                    ]}
                  />
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <p className="text-[18px] font-medium text-[#101828]">
                      License & Credentials
                    </p>
                    <span className="bg-[#FEE2E2] text-[#B91C1C] text-xs px-3 py-1 rounded-full">
                      {p.licenseStatus}
                    </span>
                  </div>

                  <button
                    onClick={() => setOpenModal(true)}
                    className="border border-[#219580] text-[#219580] px-5 h-[34px] rounded-lg text-sm flex items-center gap-2"
                  >
                    <Eye size={16} />
                    View
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-[18px] font-medium text-[#101828] mb-4">
                    Accounts
                  </p>

                  <div className="flex gap-6 text-[#667085]">
                    {["Enable", "Disable"].map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`account-${p.id}`}
                          defaultChecked={p.accounts === option}
                          className="accent-[#219580]"
                        />
                        {option}
                      </label>
                    ))}
                  </div>

                  <div className="mt-10">
                    <p className="text-[18px] font-medium text-[#101828] mb-4">
                      Performance and Activity
                    </p>
                    <button onClick={() => setOpenPerformance(true)} className="border border-[#219580] text-[#219580] px-5 h-[34px] rounded-lg text-sm flex items-center gap-2">
                      <Eye size={16} />
                      View
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-[18px] font-medium text-[#101828] mb-4">
                    Pricing
                  </p>

                  <div className="flex gap-6 text-[#667085]">
                    {["Fixed", "Variable"].map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`pricing-${p.id}`}
                          defaultChecked={p.pricing === option}
                          className="accent-[#219580]"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <button onClick={() => setOpenApproved(true)} className="flex-1 bg-gradient-to-b from-[#219580] to-[#346079] text-white h-[36px] rounded-lg flex items-center gap-3 justify-center text-[16px] font-medium">
                <Check size={16} />
                Approve
              </button>

              <button className="flex-1 border border-[#F04438] text-[#F04438] h-[36px] rounded-lg flex items-center gap-3 justify-center text-[16px] font-medium">
                <X size={16} />
                Cancel
              </button>
            </div>
          </div>
        ))}

      {active === "verified" &&
        verifiedProviders.map((p) => (
          <div
            key={p.name}
            className="bg-white rounded-2xl border border-[#E5E7EB] p-8 space-y-8"
          >
            <div className="relative">
              <div className="grid grid-cols-2 items-center gap-10">
                <div className="flex items-center gap-6">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-[18px] font-medium text-[#101828]">
                      {p.name}
                    </h3>
                    <p className="text-[#667085] mt-1">Provider</p>
                  </div>
                </div>
                <div>
                  <p className="text-[18px] font-medium text-[#101828]">
                    Registered
                  </p>
                  <p className="text-[#667085] mt-1">{p.date}</p>
                </div>
              </div>

              <div className="absolute -top-2 -right-2">
                <span className="bg-[#D4FEC2] border border-[#00000000] text-[#008236] px-3 py-1 rounded-full text-sm h-fit">
                  Verified
                </span>
              </div>
            </div>

            <div className="flex gap-8">
              <button className="flex-1 h-[36px] bg-gradient-to-b from-[#219580] to-[#346079] text-white rounded-lg text-[16px] font-medium">
                Remove Verification
              </button>

              <button onClick={() => setOpenEdit(true)} className="flex-1 h-[36px] border border-[#D0D5DD] text-[#344054] rounded-lg text-[16px] font-medium">
                Edit Details
              </button>
            </div>
          </div>
        ))}

      <LicenseModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        image={LicenseImage}
      />
      <PerformanceModal
        open={openPerformance}
        onClose={() => setOpenPerformance(false)}
        doctorName="Dr. Emily Chen"
      />
      <ApprovedModal
        open={openApproved}
        onClose={() => setOpenApproved(false)}
      />
      <EditDetailsModal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
      />
    </div>
  );
}

export default ProvidersTabs;
