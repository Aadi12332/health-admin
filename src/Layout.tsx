import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className="h-screen flex flex-col">
      <header className="h-14 bg-white shadow flex items-center px-6 shrink-0">
        <h1 className="text-lg font-semibold">Mental Health Admin</h1>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-gray-900 text-white p-6 shrink-0">
          <nav className="space-y-4">
            <p className="cursor-pointer hover:text-gray-300">Dashboard</p>
            <p className="cursor-pointer hover:text-gray-300">Users</p>
            <p className="cursor-pointer hover:text-gray-300">Settings</p>
          </nav>
        </aside>

        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout