import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const providers = [
  {
    name: "Dr. Emily Chen",
    date: "January 1, 2026",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Dr. Sarah Miller",
    date: "January 3, 2026",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Dr. Michael Ross",
    date: "January 6, 2026",
    image: "https://i.pravatar.cc/150?img=15",
  },
];
function PendingProviders() {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-[14px] border border-[#0000001A]">
      <div className="flex justify-between mb-6">
        <h2 className="text-[20px] text-[#0A0A0A]">Pending Provider Verification</h2>
        <button className="text-[#219580] text-sm underline" onClick={()=>navigate("/providers")}>View All</button>
      </div>

      <div className="">
        {providers.map((p, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-6 first:pt-0 last:pb-0 border-b last:border-none"
          >
            <div className="flex items-center gap-5">
              <img
                src={p.image}
                alt={p.name}
                className="w-[52px] h-[52px] rounded-full object-cover"
              />

              <div>
                <h3 className="text-base text-[#101828]">{p.name}</h3>
                <p className="text-[#4A5565] text-sm mt-1">Provider</p>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <div>
                <p className="text-base text-[#101828]">Registered</p>

                <div className="flex items-center gap-2 text-[#4A5565] mt-1">
                  <Calendar size={14} color="#99A1AF" />
                  <span className="text-[#4A5565] text-sm">{p.date}</span>
                </div>
              </div>

              <button className="bg-gradient-to-b from-[#219580] to-[#346079] text-white px-6 h-[32px] flex items-center rounded-lg text-sm font-medium">
                Verify
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PendingProviders;
