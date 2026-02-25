import { Users, UserPlus, Activity, DollarSign, ArrowLeft } from "lucide-react";
import StatsCard from "../components/dashboard/StatsCard";
import AppointmentTable from "../components/dashboard/AppointmentTable";
import RevenueChart from "../components/dashboard/RevenueChart";
import PendingProviders from "../components/dashboard/PendingProviders";
import SystemAlerts from "../components/dashboard/SystemAlerts";
import BackArrow from "../assets/images/backarrow.svg";
import PageHeader from "../components/common/PageHeader";

const stats = [
  {
    title: "Total Registered Providers",
    value: "1250",
    icon: <UserPlus className="text-blue-600" />,
    bgColor: "bg-blue-100",
  },
  {
    title: "Total Patients",
    value: "6890",
    icon: <Users className="text-yellow-600" />,
    bgColor: "bg-yellow-100",
  },
  {
    title: "Active Consultations",
    value: "84",
    icon: <Activity className="text-green-600" />,
    bgColor: "bg-green-100",
  },
  {
    title: "Revenue This Year",
    value: "$5600",
    icon: <DollarSign className="text-purple-600" />,
    bgColor: "bg-purple-100",
  },
];
function Dashboard() {
  return (
    <div className="space-y-5">
<PageHeader
  title="Welcome back, Sarah 👋"
  subtitle="Here’s your system overview for today."
  buttonText="Back To Website"
  buttonIcon={BackArrow}
  onClick={() => console.log("Back clicked")}
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

      <div className="grid grid-cols-2 gap-5">
        <AppointmentTable />
        <RevenueChart />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <PendingProviders />
        <SystemAlerts />
      </div>
    </div>
  );
}

export default Dashboard;
