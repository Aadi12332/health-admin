import { Users, UserPlus, TriangleAlert, Link } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import AppointmentsTabs from "../components/appointments/AppointmentsTabs";

const stats = [
  {
    title: "Total Patients ",
    value: "6890",
    icon: <Users className="text-yellow-600" />,
    bgColor: "bg-yellow-100",
  },
  {
    title: "Active Consultations",
    value: "84",
    icon: <Link className="text-green-600" />,
    bgColor: "bg-green-100",
  },
  {
    title: "New Patients",
    value: "12",
    icon: <UserPlus className="text-blue-600" />,
    bgColor: "bg-blue-100",
  },
  {
    title: "Latest Disputes",
    value: "4",
    icon: <TriangleAlert className="text-[#AF0606]" />,
    bgColor: "bg-[#FFF5F5]",
  },
];
function Appointments() {
  return (
    <div className="space-y-5">
      <PageHeader
        title="My Appointments"
        subtitle="Manage your scheduled appointments and teleheath sessions"
      />


      <AppointmentsTabs />
    </div>
  );
}

export default Appointments;
