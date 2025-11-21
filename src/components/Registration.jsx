import { useState } from 'react'

const initial = {
  full_name: '',
  email: '',
  phone: '',
  institution: '',
  grade_or_year: '',
  committee: '',
  role: 'Delegate',
  country_preferences: '',
  experience: '',
  notes: '',
}

export default function Registration() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const payload = {
        ...form,
        // Convert comma-separated list to array if provided
        country_preferences: form.country_preferences
          ? form.country_preferences.split(',').map((s) => s.trim()).filter(Boolean)
          : null,
      }
      const res = await fetch(`${baseUrl}/api/registrations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const data = await res.json()
      setStatus({ ok: true, message: 'Registration received! We\'ll be in touch via email.', id: data.id })
      setForm(initial)
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="registration" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Apply Now</h2>
            <p className="text-slate-600">Fill in your details to apply as a delegate or member of the International Press. We\'ll follow up with allotments and next steps.</p>
            {status && (
              <div className={`mt-6 rounded-lg p-4 ${status.ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {status.message}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Full name</label>
                <input required name="full_name" value={form.full_name} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input required name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Institution</label>
                <input required name="institution" value={form.institution} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Grade/Year</label>
                <input name="grade_or_year" value={form.grade_or_year} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Preferred Committee</label>
                <input required name="committee" value={form.committee} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Role</label>
                <select name="role" value={form.role} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                  <option>Delegate</option>
                  <option>International Press</option>
                  <option>Executive Board</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Country Preferences (comma separated)</label>
                <input name="country_preferences" value={form.country_preferences} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Experience (optional)</label>
                <textarea name="experience" value={form.experience} onChange={handleChange} rows="3" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Notes (optional)</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} rows="3" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
            </div>
            <button disabled={submitting} className="mt-6 inline-flex items-center rounded-lg bg-blue-600 text-white px-6 py-3 font-semibold shadow hover:bg-blue-700 transition-colors disabled:opacity-60">
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
