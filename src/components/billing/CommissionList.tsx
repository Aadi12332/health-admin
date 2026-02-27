import { useState } from "react";

type Provider = {
  id: number;
  name: string;
  image: string;
  commission: number;
};

const providersData: Provider[] = [
  {
    id: 1,
    name: "Dr. Emily Chen",
    image: "https://i.pravatar.cc/150?img=12",
    commission: 18,
  },
  {
    id: 2,
    name: "Dr. Emily Chen",
    image: "https://i.pravatar.cc/150?img=15",
    commission: 18,
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    image: "https://i.pravatar.cc/150?img=18",
    commission: 18,
  },
  {
    id: 4,
    name: "Dr. Emily Chen",
    image: "https://i.pravatar.cc/150?img=22",
    commission: 18,
  },
  {
    id: 5,
    name: "Dr. Emily Chen",
    image: "https://i.pravatar.cc/150?img=28",
    commission: 18,
  },
];

function CommissionList() {
  const [providers, setProviders] = useState(providersData);

  const handleCommissionChange = (id: number, value: number) => {
    setProviders((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, commission: value } : item,
      ),
    );
  };

  return (
    <div className="space-y-5">
      {providers.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-[#0000001A] rounded-[14px] p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <h3 className="text-[18px] text-[#101828]">{item.name}</h3>
              <p className="text-[#667085]">Provider</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <div className="relative flex items-center gap-2">
                <input
                  type="number"
                  value={item.commission}
                  min={0}
                  max={100}
                  onChange={(e) =>
                    handleCommissionChange(item.id, Number(e.target.value))
                  }
                  className="w-20 pr-10 text-end pl-2 py-1 rounded-md appearance-none outline-none"
                />

                <span className="absolute right-6 text-gray-500 text-sm">
                  %
                </span>

                <div className="absolute right-1 flex flex-col">
                  <button
                    onClick={() =>
                      handleCommissionChange(item.id, item.commission + 1)
                    }
                    className="text-[10px] leading-none px-1 hover:bg-gray-100 rounded"
                  >
                    ▲
                  </button>

                  <button
                    onClick={() =>
                      handleCommissionChange(item.id, item.commission - 1)
                    }
                    className="text-[10px] leading-none px-1 hover:bg-gray-100 rounded"
                  >
                    ▼
                  </button>
                </div>
              </div>
              <span className="text-sm text-[#667085]">Commission</span>
            </div>
          </div>

          <div>
            <button className="bg-gradient-to-b from-[#219580] to-[#346079] text-white px-8 py-2 rounded-xl">
              Set Commission
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommissionList;
