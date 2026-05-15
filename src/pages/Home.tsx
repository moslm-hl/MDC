import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Beaker, FlaskConical, Building2, Calculator, Search, GraduationCap, Sparkles } from 'lucide-react'

export function Home() {
  const chapters = [
    {
      id: 1,
      title: 'Propriétés des Matériaux',
      description: 'Masse volumique, porosité, conductivité thermique et propriétés mécaniques',
      icon: BookOpen,
      path: '/chapter1',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 2,
      title: 'Les Granulats',
      description: 'Classification, granulométrie, caractéristiques et essais mécaniques',
      icon: Beaker,
      path: '/chapter2',
      color: 'from-violet-500 to-fuchsia-500',
    },
    {
      id: 3,
      title: 'Les Liants Minéraux',
      description: 'Ciments, chaux, plâtre - fabrication et propriétés',
      icon: FlaskConical,
      path: '/chapter3',
      color: 'from-orange-500 to-amber-500',
    },
    {
      id: 4,
      title: 'Le Béton',
      description: 'Composition, fabrication, mise en œuvre et caractéristiques',
      icon: Building2,
      path: '/chapter4',
      color: 'from-emerald-500 to-lime-500',
    },
  ]

  const features = [
    { icon: Calculator, title: 'Simulations Interactives', description: 'Immersion dans des calculateurs de comportement des matériaux' },
    { icon: Search, title: 'Explorateur de Formules', description: 'Accès rapide aux formules clés et à leurs variables' },
    { icon: GraduationCap, title: 'Quiz & Évaluation', description: 'Mise en pratique avec des questions ciblées par chapitre' },
  ]

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-700/50 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_35%)] pointer-events-none" />
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/70 px-4 py-2 text-sm text-slate-100 shadow-inner">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Plateforme futuriste premium pour les matériaux de construction
            </div>

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-white">
              Academy MDC — <span className="gradient-text">Science, Simulation et Maîtrise</span>
            </h1>

            <p className="max-w-2xl text-lg text-slate-400">
              Une expérience immersive pour comprendre les propriétés des matériaux, construire des modèles et valider des formules à travers des simulations interactives.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/chapter1" className="simulation-button inline-flex items-center gap-2">
                Explorer les Chapitres
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/simulations" className="rounded-2xl border border-slate-700/60 px-5 py-3 text-sm text-slate-300 transition hover:bg-slate-800/70">
                Laboratoire virtuel
              </Link>
            </div>
          </div>

          <div className="space-y-4 rounded-[2rem] border border-slate-700/70 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-slate-900/90 p-5 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Chapitres</p>
                <p className="mt-3 text-4xl font-semibold text-cyan-400">4</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-5 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Formules</p>
                <p className="mt-3 text-4xl font-semibold text-fuchsia-400">50+</p>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-5 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Simulations</p>
              <p className="mt-3 text-4xl font-semibold text-emerald-400">+20</p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-5 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Quiz</p>
              <p className="mt-3 text-4xl font-semibold text-primary-400">Eval</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-white">Modules clés</h2>
        <div className="grid gap-6 lg:grid-cols-4">
          {chapters.map((chapter) => {
            const Icon = chapter.icon
            return (
              <Link
                key={chapter.id}
                to={chapter.path}
                className="group rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-[0_25px_50px_-25px_rgba(56,189,248,0.45)]"
              >
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${chapter.color} text-white shadow-xl shadow-slate-950/20`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{chapter.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{chapter.description}</p>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div key={index} className="glass-card p-6 border-slate-700/50 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.8)]">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900/80 text-primary-400 shadow-lg shadow-cyan-500/10">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          )
        })}
      </section>
    </div>
  )
}
