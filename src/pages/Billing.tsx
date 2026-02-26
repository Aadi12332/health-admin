import { Stethoscope, DollarSign, Clock } from "lucide-react";
import StatsCard from "../components/dashboard/StatsCard";
import PageHeader from "../components/common/PageHeader";
import BillingTabs from "../components/billing/BillingTabs";

const stats = [
  {
    title: "Total Revenue (2026)",
    value: "$5600",
    icon: <DollarSign className="text-blue-600" />,
    bgColor: "bg-blue-100",
  },
  {
    title: "Platform Commission ",
    value: "$270",
    icon: <Clock className="text-yellow-600" />,
    bgColor: "bg-yellow-100",
  },
  {
    title: "Provider Payouts",
    value: "$2890",
    icon: <Stethoscope className="text-green-600" />,
    bgColor: "bg-green-100",
  },
];
function Billing() {
  return (
    <div className="space-y-5">
      <PageHeader
        title="Billing and revenue management"
        subtitle="Manage financial transactions, commissions, payouts and reports"
      />

      <div className="grid lg:grid-cols-3 grid-cols-2 gap-3">
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

      <BillingTabs />
    </div>
  );
}

export default Billing;
