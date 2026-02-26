import { useState } from "react";
import ConsultationHistoryModal from "./ConsultationHistoryModal";
import ManageProfileModal from "./ManageProfileModal";

function PatientsTabs() {
  const [active, setActive] = useState<"patients" | "disputes">("patients");
const [openHistory, setOpenHistory] = useState(false)
const [openProfile, setOpenProfile] = useState(false)
const [selectedPatient, setSelectedPatient] = useState<any>(null)

  const activePatients = [
    {
      name: "Leslie Martin",
      email: "Leslie.m@gmail.com",
      age: 48,
      provider: "Dr. Michael Ross",
      lastConsultation: "12 December, 2025",
      appointment: "12 February, 2026; 8:00 AM",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Leslie Martin",
      email: "Leslie.m@gmail.com",
      age: 48,
      provider: "Dr. Michael Ross",
      lastConsultation: "12 December, 2025",
      appointment: "12 February, 2026; 8:00 AM",
      image: "https://i.pravatar.cc/150?img=15",
    },
    {
      name: "Leslie Martin",
      email: "Leslie.m@gmail.com",
      age: 48,
      provider: "Dr. Michael Ross",
      lastConsultation: "12 December, 2025",
      appointment: "12 February, 2026; 8:00 AM",
      image: "https://i.pravatar.cc/150?img=18",
    },
    {
      name: "Leslie Martin",
      email: "Leslie.m@gmail.com",
      age: 48,
      provider: "Dr. Michael Ross",
      lastConsultation: "12 December, 2025",
      appointment: "12 February, 2026; 8:00 AM",
      image: "https://i.pravatar.cc/150?img=18",
    },
    {
      name: "Leslie Martin",
      email: "Leslie.m@gmail.com",
      age: 48,
      provider: "Dr. Michael Ross",
      lastConsultation: "12 December, 2025",
      appointment: "12 February, 2026; 8:00 AM",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Leslie Martin",
      email: "Leslie.m@gmail.com",
      age: 48,
      provider: "Dr. Michael Ross",
      lastConsultation: "12 December, 2025",
      appointment: "12 February, 2026; 8:00 AM",
      image: "https://i.pravatar.cc/150?img=15",
    },
  ];

  const disputes = [
    {
      name: "Leslie Martin",
      email: "Leslie.m@gmail.com",
      disputeNo: "4862367",
      amount: "$489.50",
      date: "12 December, 2025",
      reason: "Charged incorrect amount",
      image: "https://i.pravatar.cc/150?img=22",
    },
    {
      name: "George Russel",
      email: "Leslie.m@gmail.com",
      disputeNo: "4862367",
      amount: "$489.50",
      date: "12 December, 2025",
      reason: "App malfunction (crashes in payment page)",
      image: "https://i.pravatar.cc/150?img=25",
    },
    {
      name: "Charles Martin",
      email: "Leslie.m@gmail.com",
      disputeNo: "4862367",
      amount: "$489.50",
      date: "12 December, 2025",
      reason: "Video consultation failed",
      image: "https://i.pravatar.cc/150?img=29",
    },
    {
      name: "Mr. John",
      email: "Leslie.m@gmail.com",
      disputeNo: "4862367",
      amount: "$489.50",
      date: "12 December, 2025",
      reason: "Video consultation failed",
      image: "https://i.pravatar.cc/150?img=38",
    },
    {
      name: "Martin",
      email: "Leslie.m@gmail.com",
      disputeNo: "4862367",
      amount: "$489.50",
      date: "12 December, 2025",
      reason: "Video consultation failed",
      image: "https://i.pravatar.cc/150?img=48",
    },
  ];

  return (
    <div>
      <div className="bg-[#E5E7EB] p-1 rounded-full w-fit flex gap-2 mb-5">
        <button
          onClick={() => setActive("patients")}
          className={`px-6 py-2 rounded-full text-sm ${
            active === "patients"
              ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
              : "text-black"
          }`}
        >
          Active Patients
        </button>

        <button
          onClick={() => setActive("disputes")}
          className={`px-6 py-2 rounded-full text-sm ${
            active === "disputes"
              ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
              : "text-black"
          }`}
        >
          Disputes
        </button>
      </div>

      {active === "patients" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {activePatients.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-[14px] border border-[#E5E7EB] p-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4 items-center">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-[16px] text-[#101828]">{p.name}</h3>
                      <p className="text-[#4A5565] text-sm">{p.email}</p>
                    </div>
                  </div>

                  <button   onClick={() => {
    setSelectedPatient(p)
    setOpenProfile(true)
  }} className="border border-[#219580] text-[#219580] px-2 py-1 rounded-lg text-xs whitespace-nowrap">
                    Manage Profile
                  </button>
                </div>

                <div className="flex gap-3 mb-6">
                  <div>
                    <p className="text-[#4A5565] text-sm">Age</p>
                    <p className="text-[#000] text-sm mt-1">{p.age}</p>
                  </div>

                  <div>
                    <p className="text-[#4A5565] text-sm">Provider</p>
                    <p className="text-[#000] text-sm mt-1 truncate">
                      {p.provider}
                    </p>
                  </div>

                  <div>
                    <p className="text-[#4A5565] text-sm">Last Consultation</p>
                    <p className="text-[#000] text-sm mt-1">
                      {p.lastConsultation}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-[#4A5565] text-sm">Appointments</p>
                  <p className="text-[#000] text-sm mt-1">{p.appointment}</p>
                </div>
              </div>

              <button onClick={() => setOpenHistory(true)} className="w-full bg-gradient-to-b from-[#219580] to-[#346079] text-white h-[36px] flex items-center justify-center rounded-lg text-sm font-medium">
                View Consultation History
              </button>
            </div>
          ))}
        </div>
      )}
      <ConsultationHistoryModal
  open={openHistory}
  onClose={() => setOpenHistory(false)}
  />

<ManageProfileModal
  open={openProfile}
  onClose={() => setOpenProfile(false)}
  data={{
    name: selectedPatient?.name,
    email: selectedPatient?.email,
    image: selectedPatient?.image,
    dob: "Sep.15.1990",
    gender: "Female",
    address: "Joint pain",
    insurance: "Delta Tech",
    ssn: "93484345657",
    mobile: "270-564-212",
    maritalStatus: "Married",
    registeredOn: "15 July 2025"
  }}
/>


      {active === "disputes" &&
        disputes.map((d, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-[#E5E7EB] p-6 mb-5 last:mb-0"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4 items-center">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-[16px] text-[#101828]">{d.name}</h3>
                  <p className="text-[#4A5565] text-sm">{d.email}</p>
                </div>
              </div>

              <span className="bg-[#FEF9C2] border border-[#00000000] text-[#A65F00] px-3 py-1 rounded-full text-xs">
                Pending
              </span>
            </div>

            <div className="grid grid-cols-4 gap-10">
              <div>
                <p className="text-[#667085] text-base">Dispute No.</p>
                <p className="text-[#000] text-sm mt-1">{d.disputeNo}</p>
              </div>

              <div>
                <p className="text-[#667085] text-base">Dispute Amount</p>
                <p className="text-[#000] text-sm mt-1">{d.amount}</p>
              </div>

              <div>
                <p className="text-[#667085] text-base">Dispute Date</p>
                <p className="text-[#000] text-sm mt-1">{d.date}</p>
              </div>

              <div>
                <p className="text-[#667085] text-base">Reason</p>
                <p className="text-[#000] text-sm mt-1">{d.reason}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default PatientsTabs;
