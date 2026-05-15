import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, BookOpen, Beaker, FlaskConical, Building2, Calculator, Search, GraduationCap, ClipboardList, Moon, Sun, Menu, X } from 'lucide-react'

export function Navigation() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isLightMode, setIsLightMode] = useState(false)

  useEffect(() => {
    setIsLightMode(document.documentElement.classList.contains('light-mode'))
  }, [])

  const navItems = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/chapter1', label: 'Propriétés', icon: BookOpen },
    { path: '/chapter2', label: 'Granulats', icon: Beaker },
    { path: '/chapter3', label: 'Liants', icon: FlaskConical },
    { path: '/chapter4', label: 'Béton', icon: Building2 },
    { path: '/exercises', label: 'Exercices', icon: ClipboardList },
    { path: '/simulations', label: 'Simulations', icon: Calculator },
    { path: '/explorer', label: 'Explorateur', icon: Search },
    { path: '/quiz', label: 'Quiz', icon: GraduationCap },
  ]

  const toggleTheme = () => {
    setIsLightMode(!isLightMode)
    document.documentElement.classList.toggle('light-mode')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/70 shadow-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-glow">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">MDC</p>
            <p className="text-sm font-semibold text-slate-100">MDC</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
              >
                <Icon className="w-4 h-4 inline mr-1" />
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-700/50 bg-slate-900/80 text-slate-300 hover:bg-slate-800/80 transition"
            title="Basculer thème"
          >
            {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <button
            className="lg:hidden p-2 rounded-lg border border-slate-700/50 bg-slate-900/80 text-slate-300 hover:bg-slate-800/80 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Ouvrir le menu mobile"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive ? 'bg-slate-800/80 text-primary-400' : 'text-slate-300 hover:bg-slate-800/80'
                  }`}
                >
                  <Icon className="w-4 h-4 inline mr-2" />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
