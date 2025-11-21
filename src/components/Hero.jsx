export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 ring-1 ring-inset ring-blue-600/20">
              Rhetorix 2025 • Registrations Open
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Where eloquence meets diplomacy
            </h1>
            <p className="mt-6 text-lg text-slate-700 max-w-xl">
              Join delegates from across the region for two days of debate, negotiation, and global problem-solving. Sharpen your voice. Shape the discourse.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#registration" className="inline-flex items-center rounded-lg bg-blue-600 text-white px-6 py-3 font-semibold shadow hover:bg-blue-700 transition-colors">
                Apply as Delegate
              </a>
              <a href="#committees" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-6 py-3 font-semibold shadow ring-1 ring-slate-200 hover:bg-slate-50">
                Explore Committees
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">Event dates: 22–23 Feb, 2025 • Venue TBA</p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-[2px] shadow-lg">
              <div className="h-full w-full rounded-2xl bg-white flex items-center justify-center">
                <div className="p-6 text-center">
                  <p className="text-3xl font-extrabold text-slate-900">Rhetorix MUN</p>
                  <p className="mt-2 text-slate-600">Debate. Diplomacy. Distinction.</p>
                  <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                    <div className="rounded-lg bg-slate-50 p-4">
                      <p className="font-semibold">2 Days</p>
                      <p className="text-slate-500">Intense sessions</p>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-4">
                      <p className="font-semibold">4+ Committees</p>
                      <p className="text-slate-500">Diverse agendas</p>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-4">
                      <p className="font-semibold">Awards</p>
                      <p className="text-slate-500">Merit recognized</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
