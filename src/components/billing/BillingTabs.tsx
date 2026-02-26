import { useState } from "react";
import BillingList from "./BillingList";
import CommissionList from "./CommissionList";
import PayoutTable from "./PayoutTable";
import RefundList from "./RefundList";
import RevenueDashboard from "./RevenueDashboard";

function BillingTabs() {
  const [active, setActive] = useState<"consultation" | "platform" | "provider" | "refund" | "financial">("consultation");

  return (
    <div>
      <div className="bg-[#E5E7EB] p-1 rounded-full w-full justify-between flex gap-2 mb-5">
        <button
          onClick={() => setActive("consultation")}
          className={`px-6 py-2 rounded-full text-sm ${
            active === "consultation"
              ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
              : "text-black"
          }`}
        >
          Consultation Transactions
        </button>

        <button
          onClick={() => setActive("platform")}
          className={`px-6 py-2 rounded-full text-sm ${
            active === "platform"
              ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
              : "text-black"
          }`}
        >
          Platform Commission 
        </button>

        <button
          onClick={() => setActive("provider")}
          className={`px-6 py-2 rounded-full text-sm ${
            active === "provider"
              ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
              : "text-black"
          }`}
        >
          Provider payouts 
        </button>

        <button
          onClick={() => setActive("refund")}
          className={`px-6 py-2 rounded-full text-sm ${
            active === "refund"
              ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
              : "text-black"
          }`}
        >
          Refund & Disputes 
        </button>

        <button
          onClick={() => setActive("financial")}
          className={`px-6 py-2 rounded-full text-sm ${
            active === "financial"
              ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
              : "text-black"
          }`}
        >
          Financial Reports 
        </button>
      </div>

      {/* {active === "consultation" && (
        <BillingList />
      )}


      {active === "platform" &&
        <CommissionList />
        }

      {active === "provider" &&
        <PayoutTable />
        }

      {active === "refund" &&
        <RefundList />
        }

      {active === "financial" &&
        <RevenueDashboard />
        } */}
    </div>
  );
}

export default BillingTabs;
