import { useEffect, useState } from 'react'

export default function Committees() {
  const [committees, setCommittees] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/committees`)
        const data = await res.json()
        setCommittees(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="committees" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-8">Committees</h2>
        {loading ? (
          <p className="text-slate-600">Loading committees...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committees.map((c) => (
              <div key={c.code} className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">{c.name}</h3>
                  <span className="text-xs font-mono bg-slate-100 text-slate-700 rounded px-2 py-1">{c.code}</span>
                </div>
                <p className="mt-2 text-slate-600">{c.description}</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-700">Sample topics</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc pl-5">
                    {c.topics.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
