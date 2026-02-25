import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Dashboard from "./pages/Dashboard"
import Providers from "./pages/Providers"
import Patients from "./pages/Patients"
import Appointments from "./pages/Appointments"
import Telehealth from "./pages/Telehealth"
import Billing from "./pages/Billing"
import Notifications from "./pages/Notifications"
import Reports from "./pages/Reports"
import Security from "./pages/Security"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="providers" element={<Providers />} />
          <Route path="patients" element={<Patients />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="telehealth" element={<Telehealth />} />
          <Route path="billing" element={<Billing />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="reports" element={<Reports />} />
          <Route path="security" element={<Security />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App