import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="h-screen flex bg-[#F9FAFB] overflow-hidden">
      <Sidebar 
  isOpen={isSidebarOpen} 
  setIsOpen={setIsSidebarOpen} 
/>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={() => setIsSidebarOpen(prev => !prev)} />
        <main className="flex-1 overflow-y-auto lg:p-5 p-3 scroll-hide">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout