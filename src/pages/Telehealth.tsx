import PageHeader from "../components/common/PageHeader";
import TelehealthTabs from "../components/telehealth/TelehealthTabs";

function Telehealth() {
  return (
    <div className="space-y-5">
      <PageHeader
        title="Telehealth Configuration"
        subtitle="Configure Telehealth video, Waiting room and Chat settings"
      />

      <TelehealthTabs />

    </div>
  );
}

export default Telehealth;