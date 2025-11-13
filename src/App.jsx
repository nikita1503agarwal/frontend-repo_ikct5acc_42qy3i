import React, { useEffect } from 'react'

function Navbar() {
  useEffect(() => {
    const handler = (e) => {
      const href = e.target.getAttribute?.('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-extrabold tracking-tight">My Portfolio</a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
        <a href="#contact" className="hidden sm:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm transition-colors">
          Get in touch
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-12 sm:pb-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full">
            Engineering Graduate • Tech Portfolio
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Building modern solutions with an engineer's mindset
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            I’m an engineering graduate passionate about crafting robust systems, intuitive interfaces, and impactful products. Explore my projects, skills, and journey below.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold shadow transition">View Projects</a>
            <a href="#contact" className="bg-white hover:bg-gray-50 text-gray-900 px-5 py-3 rounded-lg font-semibold border border-gray-200 shadow-sm transition">Contact Me</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 ring-2 ring-white" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 ring-2 ring-white" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 ring-2 ring-white" />
            </div>
            <p>Open to roles in software, product, and systems.</p>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
            {/* Spline viewer */}
            <spline-viewer
              loading="lazy"
              class="w-full h-[360px] sm:h-[480px]"
              url="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            ></spline-viewer>
          </div>
          <div className="absolute -z-10 -inset-6 blur-3xl opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.4),transparent_60%),radial-gradient(circle_at_80%_50%,rgba(99,102,241,0.35),transparent_55%)]" />
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-bold">About me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I recently graduated in engineering and enjoy solving real-world problems at the intersection of software and systems. I focus on writing clean, scalable code and delivering user-centered experiences.
          </p>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Interests include full‑stack development, data-driven decisions, and automation. I love working with modern JavaScript frameworks, Python backends, and cloud tooling.
          </p>
        </div>
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {[
            { title: 'Problem Solving', desc: 'Strong fundamentals with a practical, analytical approach.' },
            { title: 'Systems Thinking', desc: 'Designing components that integrate cleanly end-to-end.' },
            { title: 'Collaboration', desc: 'Clear communication and teamwork across disciplines.' },
            { title: 'Learning Mindset', desc: 'Always experimenting with new tools, patterns, and ideas.' },
          ].map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'FastAPI', level: 'Intermediate' },
    { name: 'SQL / MongoDB', level: 'Intermediate' },
    { name: 'Git & CI/CD', level: 'Intermediate' },
  ]

  return (
    <section id="skills" className="py-16 sm:py-24 bg-gradient-to-b from-blue-50/60 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
        <p className="mt-2 text-gray-600">A quick overview of technologies I work with.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((s) => (
            <div key={s.name} className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{s.name}</h3>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{s.level}</span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" style={{ width: `${s.level === 'Advanced' ? 90 : 70}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
    {
      title: 'Smart Dashboard',
      desc: 'Interactive analytics dashboard with real-time charts and clean UX.',
      tags: ['React', 'Tailwind', 'Charting'],
      link: '#',
    },
    {
      title: 'Automation Toolkit',
      desc: 'CLI and API tools to automate routine workflows and deployments.',
      tags: ['Python', 'FastAPI', 'DevOps'],
      link: '#',
    },
    {
      title: 'Portfolio Website',
      desc: 'Modern personal website with 3D hero, smooth scrolling and responsive design.',
      tags: ['Vite', 'Spline', 'UX'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Featured projects</h2>
            <p className="mt-2 text-gray-600">A selection of work that highlights my engineering approach.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-block text-blue-700 hover:text-blue-800 font-semibold">Let’s collaborate →</a>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition">
              <div className="h-40 bg-gradient-to-br from-blue-100 to-indigo-100" />
              <div className="p-5">
                <h3 className="font-semibold text-lg group-hover:text-blue-700 transition">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Let’s connect</h2>
          <p className="mt-2 text-gray-600">I’m available for roles, internships, and freelance projects.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <form action="mailto:your.email@example.com" method="post" encType="text/plain" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <input type="text" name="name" placeholder="Your name" className="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
              <input type="email" name="email" placeholder="Email address" className="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
              <textarea name="message" rows="5" placeholder="Message" className="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold shadow transition" type="submit">Send message</button>
            </div>
          </form>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold">Quick links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="text-blue-700 hover:underline" href="mailto:your.email@example.com">Email</a></li>
              <li><a className="text-blue-700 hover:underline" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a className="text-blue-700 hover:underline" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a className="text-blue-700 hover:underline" href="#" download>Download Resume</a></li>
            </ul>
            <div className="mt-6 p-4 rounded-lg bg-blue-50 text-sm text-blue-900">
              Tip: Replace contacts with your details. The form uses mailto for quick messages.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 bg-white border-t border-gray-100 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} Your Name — Built with care.
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen font-[Inter,Manrope,system-ui,sans-serif] text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
