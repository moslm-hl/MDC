import { useState, type ReactNode } from 'react'

export function Exercises() {
  return (
    <div className="pt-20 space-y-6">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-4xl font-bold gradient-text">Exercices Pratiques</h1>
        <p className="text-slate-400">Appliquez les notions avec des scénarios guidés et des calculs dynamiques.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <ExerciseCard
          title="Module de finesse"
          summary="Calculez Mf avec des taux de refus de tamis et identifiez le type de sable."
          component={<FinesseExercise />}
        />
        <ExerciseCard
          title="Rapport Eau/Ciment"
          summary="Simulez le rapport E/C et visualisez son impact sur la résistance."
          component={<ECRatioExercise />}
        />
        <ExerciseCard
          title="Résistance à la compression"
          summary="Calculez la résistance fc d'une éprouvette à partir d'une charge appliquée."
          component={<CompressionExercise />}
        />
      </div>
    </div>
  )
}

function ExerciseCard({ title, summary, component }: { title: string; summary: string; component: ReactNode }) {
  return (
    <div className="section-card">
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-slate-400">{summary}</p>
        </div>
        {component}
      </div>
    </div>
  )
}

function FinesseExercise() {
  const [values, setValues] = useState({ t4: 5, t2: 10, t1: 15, t05: 20, t025: 18, t0125: 12 })
  const total = Object.values(values).reduce((sum, value) => sum + value, 0)
  const cumulative = {
    t4: total > 0 ? 100 - (values.t4 / total) * 100 : 0,
    t2: total > 0 ? 100 - ((values.t4 + values.t2) / total) * 100 : 0,
    t1: total > 0 ? 100 - ((values.t4 + values.t2 + values.t1) / total) * 100 : 0,
    t05: total > 0 ? 100 - ((values.t4 + values.t2 + values.t1 + values.t05) / total) * 100 : 0,
    t025: total > 0 ? 100 - ((values.t4 + values.t2 + values.t1 + values.t05 + values.t025) / total) * 100 : 0,
    t0125: total > 0 ? 100 - ((values.t4 + values.t2 + values.t1 + values.t05 + values.t025 + values.t0125) / total) * 100 : 0,
  }
  const Mf = (cumulative.t4 + cumulative.t2 + cumulative.t1 + cumulative.t05 + cumulative.t025 + cumulative.t0125) / 100
  const recommendation = Mf < 2.2 ? 'Sable fin' : Mf > 2.8 ? 'Sable grossier' : 'Sable optimal'

  return (
    <div className="space-y-4">
      <div className="grid gap-3">
        {Object.entries(values).map(([key, value]) => (
          <label key={key} className="block text-sm text-slate-400">
            Refus {key === 't0125' ? '0.125' : key === 't025' ? '0.25' : key === 't05' ? '0.5' : key === 't4' ? '4' : key === 't2' ? '2' : '1'} mm
            <input
              type="number"
              value={value}
              onChange={(e) => setValues({ ...values, [key]: parseFloat(e.target.value) || 0 })}
              className="simulation-input mt-2"
            />
          </label>
        ))}
      </div>

      <div className="rounded-3xl bg-slate-900/80 p-5 border border-slate-700/60">
        <p className="text-sm text-slate-400">Module de finesse</p>
        <p className="mt-3 text-3xl font-semibold text-primary-400">{Mf.toFixed(2)}</p>
        <p className="text-slate-300 mt-3">Type : <strong className="text-emerald-400">{recommendation}</strong></p>
      </div>
      <div className="rounded-3xl bg-slate-800/50 p-4">
        <p className="text-slate-300 text-sm">Un Mf entre 2.2 et 2.8 est optimal pour un bon compromis entre maniabilité et performance.</p>
      </div>
    </div>
  )
}

function ECRatioExercise() {
  const [water, setWater] = useState(180)
  const [cement, setCement] = useState(320)
  const ratio = cement > 0 ? water / cement : 0
  const suggestion = ratio > 0.6 ? 'Diminuer l’eau pour augmenter la résistance' : ratio < 0.4 ? 'Ajouter de l’eau pour améliorer la maniabilité' : 'Rapport équilibré pour un béton de qualité'

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-slate-400">
          Eau (kg)
          <input type="number" value={water} onChange={(e) => setWater(parseFloat(e.target.value) || 0)} className="simulation-input mt-2" />
        </label>
        <label className="block text-sm text-slate-400">
          Ciment (kg)
          <input type="number" value={cement} onChange={(e) => setCement(parseFloat(e.target.value) || 0)} className="simulation-input mt-2" />
        </label>
      </div>

      <div className="rounded-3xl bg-slate-900/80 p-5 border border-slate-700/60">
        <p className="text-sm text-slate-400">Rapport E/C</p>
        <p className="mt-3 text-3xl font-semibold text-emerald-400">{ratio.toFixed(2)}</p>
        <p className="text-slate-300 mt-3">{suggestion}</p>
      </div>
    </div>
  )
}

function CompressionExercise() {
  const [force, setForce] = useState(500)
  const [diameter, setDiameter] = useState(0.08)
  const area = Math.PI * diameter * diameter / 4
  const fc = area > 0 ? force / area / 1000 : 0

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-slate-400">
          Force Fmax (kN)
          <input type="number" value={force} onChange={(e) => setForce(parseFloat(e.target.value) || 0)} className="simulation-input mt-2" />
        </label>
        <label className="block text-sm text-slate-400">
          Diamètre (m)
          <input type="number" step="0.01" value={diameter} onChange={(e) => setDiameter(parseFloat(e.target.value) || 0)} className="simulation-input mt-2" />
        </label>
      </div>

      <div className="rounded-3xl bg-slate-900/80 p-5 border border-slate-700/60">
        <p className="text-sm text-slate-400">Section A</p>
        <p className="mt-3 text-3xl font-semibold text-primary-400">{area.toFixed(4)} m²</p>
        <p className="text-sm text-slate-400 mt-4">Résistance fc</p>
        <p className="mt-3 text-3xl font-semibold text-accent-400">{fc.toFixed(2)} MPa</p>
      </div>
    </div>
  )
}
