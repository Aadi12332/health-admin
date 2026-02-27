import PageHeader from "../components/common/PageHeader";
import AnalyticsDashboard from "../components/reports/AnalyticsDashboard";

function Reports () {
  return (
    <div className="space-y-5">
      <PageHeader
        title="Report & Analytics"
        subtitle="Reports and Analytics of Provider and Patient"
      />

      <AnalyticsDashboard />
    </div>
  );
}

export default Reports;
