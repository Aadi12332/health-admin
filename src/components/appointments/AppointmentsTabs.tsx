import { useState } from "react";
import AppointmentsList from "./AppointmentsList";

function AppointmentsTabs() {
  const [active, setActive] = useState<"upcoming" | "past" | "cancelled">("upcoming");
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
          onClick={() => setActive("upcoming")}
          className={`px-6 py-2 rounded-full text-sm ${
            active === "upcoming"
              ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
              : "text-black"
          }`}
        >
          Upcoming
        </button>

        <button
          onClick={() => setActive("past")}
          className={`px-6 py-2 rounded-full text-sm ${
            active === "past"
              ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
              : "text-black"
          }`}
        >
          Past
        </button>

        <button
          onClick={() => setActive("cancelled")}
          className={`px-6 py-2 rounded-full text-sm ${
            active === "cancelled"
              ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
              : "text-black"
          }`}
        >
          Cancelled
        </button>
      </div>

      {active === "upcoming" && (
       <AppointmentsList status="upcoming" />
      )}


      {active === "past" &&
        <AppointmentsList status="past" />  
      }

      {active === "cancelled" &&
      <AppointmentsList status="cancelled" />  
      }
    </div>
  );
}

export default AppointmentsTabs;
