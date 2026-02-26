import { Users, UserPlus, TriangleAlert, Link } from "lucide-react";
import StatsCard from "../components/dashboard/StatsCard";
import PageHeader from "../components/common/PageHeader";
import PatientsTabs from "../components/patient/PatientsTabs";

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
function Patient() {
  return (
    <div className="space-y-5">
      <PageHeader
        title="Patient Management"
        subtitle="Manage and Monitor Patient Profiles & Consultations"
      />

      <div className="grid lg:grid-cols-4 grid-cols-2 gap-3">
        {stats.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
            bgColor={item.bgColor}
          />
        ))}
      </div>

      <PatientsTabs />
    </div>
  );
}

export default Patient;
