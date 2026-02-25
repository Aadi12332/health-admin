import PageHeader from "../components/common/PageHeader";
import ProvidersTabs from "../components/provider/ProvidersTabs";

function Providers() {
  return (
    <div className="space-y-5">
      <PageHeader
        title="Provider Management"
        subtitle="Approve, Manage and verify healthcare providers "
      />
     <ProvidersTabs />
    </div>
  );
}

export default Providers;
