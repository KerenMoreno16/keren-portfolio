export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#07111f]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div>
          <h1 className="text-2xl font-black tracking-tight text-white">
            Keren Moreno's <span className="text-cyan-400">Portfolio</span>
          </h1>
        </div>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a
            href="#projects"
            className="hover:text-cyan-400 transition"
          >
            Projects
          </a>

          <a
            href="#about"
            className="hover:text-cyan-400 transition"
          >
            About
          </a>

          <a
            href="#experience"
            className="hover:text-cyan-400 transition"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>
        </nav>

        {/* BUTTON */}
        <a
          href="#contact"
          className="bg-cyan-400 text-black font-semibold px-5 py-3 rounded-xl hover:scale-105 transition"
        >
          Let’s Talk
        </a>
      </div>
    </header>
  )
}