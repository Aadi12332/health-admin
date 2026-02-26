import { useState } from "react";
import {
  Calendar,
  Clock,
  Video,
  Phone,
  Pencil,
  X,
  Video as VideoIcon,
  Edit,
} from "lucide-react";
import AppointmentActionModal from "./AppointmentActionModal";

const appointments = [
  {
    id: 1,
    doctor: "Dr. Ethan Williams",
    patient: "Leslie Martin",
    date: "January 15, 2026",
    time: "10:00 AM",
    duration: "45 min",
    type: "Video Call",
    status: "Confirmed",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    doctor: "Dr. Michael Ross",
    patient: "Emily Tom",
    date: "January 15, 2026",
    time: "10:00 AM",
    duration: "45 min",
    type: "Video Call",
    status: "Confirmed",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 3,
    doctor: "Dr. Sarah Miller",
    patient: "Harry Jacob",
    date: "January 18, 2026",
    time: "3:30 PM",
    duration: "60 min",
    type: "Phone Call",
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=18",
  },
];

function AppointmentsList({ status }: { status: string }) {
    const [modalType, setModalType] = useState<"reschedule" | "cancel" | null>(null)
  return (
    <div className="space-y-5">
      {appointments.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-[14px] border border-[#0000001A] lg:p-6 p-3"
        >
          <div className="flex justify-between items-start relative">
            <div className="flex gap-4 flex-1">
              <img
                src={item.image}
                alt={item.doctor}
                className="w-16 h-16 rounded-full object-cover"
              />

              <div className="flex-1">
                <h3 className="text-[16px] text-[#101828]">{item.doctor}</h3>
                <p className="text-[#4A5565] text-sm mb-2">Provider</p>
                <div className="grid grid-cols-2 gap-3 w-full">
                  <div>
                    <p className="text-[#9CA1A8] text-sm mb-1">
                      Patient:{" "}
                      <span className="text-[#4A5565] text-sm">
                        {item.patient}
                      </span>
                    </p>

                    <div className="flex gap-6">
                      <div className="flex items-center gap-2 text-[#4A5565] text-sm">
                        <Clock size={14} color="#99A1AF" />
                        {item.time} ({item.duration})
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 flex-col">
                    <div className="flex items-center gap-2 text-[#4A5565] text-sm">
                      <Calendar size={14} color="#99A1AF" />
                      {item.date}
                    </div>
                    <div className="flex items-center gap-2 text-[#4A5565] text-sm">
                      {item.type === "Video Call" ? (
                        <Video size={14} color="#99A1AF" />
                      ) : (
                        <Phone size={14} color="#99A1AF" />
                      )}
                      {item.type}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {status === "upcoming" && (
              <span
                className={`px-3 py-1 rounded-full text-xs absolute top-2 right-2 ${
                  item.status === "Confirmed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {item.status}
              </span>
            )}
            {status === "past" && (
              <span
                className={`px-3 py-1 rounded-full text-xs absolute top-2 right-2 bg-[#DBEAFE] text-[#1447E6]`}
              >
                Completed
              </span>
            )}
            {status === "cancelled" && (
              <span
                className={`px-3 py-1 rounded-full text-xs absolute top-2 right-2 bg-[#FFE2E2] text-[#C10007]`}
              >
                Cancelled
              </span>
            )}
          </div>

            {status === "upcoming" && (
              <div className="flex justify-end gap-4 flex-wrap w-full mt-5">
                {item.status === "Confirmed" && (
                  <button className="bg-gradient-to-b from-[#219580] to-[#346079] text-white px-6 py-2 flex-1 rounded-lg flex justify-center items-center gap-2">
                    <VideoIcon size={16} />
                    Join Session
                  </button>
                )}

                <button onClick={() => setModalType("reschedule")}
                  className={`border border-[#219580] text-[#219580] px-6 py-2 rounded-lg justify-center flex items-center gap-2 ${item.status === "Confirmed" ? "" : "flex-1"}`}
                >
                  <Edit size={16} />
                  Reschedule
                </button>

                <button onClick={() => setModalType("cancel")}
                  className={`border border-red-400 text-red-500 px-6 py-2 rounded-lg justify-center flex items-center gap-2 ${item.status === "Confirmed" ? "" : "flex-1"}`}
                >
                  <X size={16} />
                  Cancel
                </button>
              </div>
            )}

            {status === "past" && (
              <button className="border border-[#0000001A] text-[#0A0A0A] px-6 py-2 rounded-lg flex-1 mt-5 w-full">
                View Session Notes
              </button>
            )}

        </div>
      ))}
            <AppointmentActionModal
  open={modalType !== null}
  type={modalType}
  onClose={() => setModalType(null)}
/>
    </div>
  );
}

export default AppointmentsList;
