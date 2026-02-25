import { Camera } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center gap-4">
        <Camera className="w-10 h-10 text-blue-600" />
        <h1 className="text-2xl font-semibold">React + Tailwind v3 + TypeScript</h1>
      </div>
    </div>
  )
}

export default App
