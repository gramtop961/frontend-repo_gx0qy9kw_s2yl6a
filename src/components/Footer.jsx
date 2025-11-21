export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <p className="font-extrabold text-xl text-slate-900">Rhetorix <span className="text-blue-600">MUN</span></p>
            <p className="mt-2 text-slate-600 text-sm max-w-sm">An immersive conference celebrating diplomacy, discourse, and the art of persuasion.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Quick links</p>
            <ul className="mt-2 space-y-1 text-slate-600 text-sm">
              <li><a href="#about" className="hover:text-blue-600">About</a></li>
              <li><a href="#committees" className="hover:text-blue-600">Committees</a></li>
              <li><a href="#registration" className="hover:text-blue-600">Register</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Contact</p>
            <p className="mt-2 text-slate-600 text-sm">secretariat@rhetorixmun.org</p>
            <p className="text-slate-600 text-sm">Instagram: @rhetorixmun</p>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-500">© {new Date().getFullYear()} Rhetorix MUN. All rights reserved.</div>
      </div>
    </footer>
  )
}
