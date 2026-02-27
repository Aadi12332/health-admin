import { useState } from "react";
import PermissionsManagement from "./PermissionsManagement";
import ActivityLog from "./ActivityLog";
import SecuritySettings from "./SecuritySettings";
import DataSecurityAdvanced from "./DataSecurityAdvanced";

function SecurityTabs() {
  const [active, setActive] = useState<"role" | "audit" | "hipaa" | "data">("role");

  return (
    <div>
      <div className="bg-[#E5E7EB] p-1 rounded-full w-full justify-between flex gap-2 mb-5">
        <button
          onClick={() => setActive("role")}
          className={`px-6 py-2 rounded-full text-sm ${
            active === "role"
              ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
              : "text-black"
          }`}
        >
          Role based access control
        </button>

        <button
          onClick={() => setActive("audit")}
          className={`px-6 py-2 rounded-full text-sm ${
            active === "audit"
              ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
              : "text-black"
          }`}
        >
          Audit, logs and activity tracking 
        </button>

        <button
          onClick={() => setActive("hipaa")}
          className={`px-6 py-2 rounded-full text-sm ${
            active === "hipaa"
              ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
              : "text-black"
          }`}
        >
          HIPAA - Ready data handling 
        </button>

        <button
          onClick={() => setActive("data")}
          className={`px-6 py-2 rounded-full text-sm ${
            active === "data"
              ? "bg-gradient-to-b from-[#219580] to-[#346079] text-white"
              : "text-black"
          }`}
        >
          Data Encryption, and Backups 
        </button>
      </div>

      {active === "role" && (
        <PermissionsManagement />
      )}

      {active === "audit" &&
        <ActivityLog />
      }

      {active === "hipaa" &&
        <SecuritySettings />
      }

      {active === "data" &&
        <DataSecurityAdvanced />
      }

    </div>
  );
}

export default SecurityTabs;
