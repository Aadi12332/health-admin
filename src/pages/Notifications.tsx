import PageHeader from "../components/common/PageHeader";
import MessageSettings from "../components/notifications/MessageSettings";

function Notifications() {
  return (
    <div className="space-y-5">
      <PageHeader
        title="Notification & Communication"
        subtitle="Configure and manage communication settings and notification settings across the platform"
      />

      <MessageSettings />
    </div>
  );
}

export default Notifications;
