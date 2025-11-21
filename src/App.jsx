import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Committees from './components/Committees'
import Registration from './components/Registration'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        {/* About */}
        <section id="about" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">About Rhetorix</h2>
                <p className="mt-4 text-lg text-slate-700">Rhetorix MUN is a platform for young leaders to debate the most pressing global challenges with rigor and respect. Across two days of committee sessions, participants develop negotiation, research, and public speaking skills while building lifelong networks.</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  <li className="rounded-lg bg-slate-50 p-4">Professional-grade committees</li>
                  <li className="rounded-lg bg-slate-50 p-4">Experienced Executive Board</li>
                  <li className="rounded-lg bg-slate-50 p-4">Fair, transparent evaluation</li>
                  <li className="rounded-lg bg-slate-50 p-4">Memorable social events</li>
                </ul>
              </div>
              <div className="h-full">
                <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-[2px] shadow-lg">
                  <div className="h-full w-full rounded-2xl bg-white grid place-items-center">
                    <div className="p-6 text-center">
                      <p className="text-2xl font-extrabold text-slate-900">22–23 Feb, 2025</p>
                      <p className="mt-2 text-slate-600">Venue: To be announced</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Committees />
        {/* Schedule placeholder */}
        <section id="schedule" className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">Schedule</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-200 p-6 bg-white">
                <p className="font-semibold">Day 1</p>
                <p className="text-slate-600 mt-2">Inauguration, Committee Sessions I–III</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6 bg-white">
                <p className="font-semibold">Socials</p>
                <p className="text-slate-600 mt-2">Evening mixer for delegates</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6 bg-white">
                <p className="font-semibold">Day 2</p>
                <p className="text-slate-600 mt-2">Committee Sessions IV–VI, Closing & Awards</p>
              </div>
            </div>
          </div>
        </section>

        <Registration />
      </main>
      <Footer />
    </div>
  )
}

export default App
