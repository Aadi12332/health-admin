import Layout from "./Layout"

function App() {
  return (
    <Layout>
      <div className="space-y-6">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            Content Card {i + 1}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default App