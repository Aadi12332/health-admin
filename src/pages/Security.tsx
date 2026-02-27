import PageHeader from "../components/common/PageHeader";
import SecurityTabs from "../components/security/SecurityTabs";

function Security() {
  return (
    <div className="space-y-5">
      <PageHeader
        title="Security and compliance"
        subtitle="Manage security and compliance settings to  protect sensitive healthcare data"
      />

      <SecurityTabs />
    </div>
  );
}

export default Security;
