import trianglealertred from "../../assets/images/trianglealert.svg";
import trianglealertyellow from "../../assets/images/trianglealert-yellow.svg";

function SystemAlerts() {
  return (
    <div className="bg-white p-6 rounded-[14px] border border-[#0000001A]">
      <div className="flex justify-between mb-6">
        <h2 className="text-[20px] text-[#0A0A0A]">System Alerts</h2>
      </div>
      <div className="space-y-6">
        <div className="bg-[#FFEEEE] border border-[#E4E4E4] p-5 rounded-[10px] flex items-center lg:gap-8 gap-3">
          <img src={trianglealertred} alt="" />
          <div>
            <h3 className="font-semibold text-red-600">Video Service Outage</h3>
            <p className="text-sm text-gray-600 mt-2">
              Telehealth video communication is currently off-line and it's
              affecting live consultations
            </p>
          </div>
        </div>

        <div className="bg-[#FFF8E5] border border-[#E4E4E4] p-5 rounded-[10px] flex items-center lg:gap-8 gap-3">
          <img src={trianglealertyellow} alt="" />
        <div>
            <h3 className="font-semibold text-yellow-600">
            Pending Provider Verifications
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            24 provider applications pending for approval
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default SystemAlerts;
