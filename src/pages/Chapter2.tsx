import { useState, type ReactNode } from 'react'
import { ChevronDown, ChevronUp, Beaker, Layers, Activity, Zap } from 'lucide-react'

export function Chapter2() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['intro']))

  const toggleSection = (id: string) => {
    const newSet = new Set(expandedSections)
    if (newSet.has(id)) {
      newSet.delete(id)
    } else {
      newSet.add(id)
    }
    setExpandedSections(newSet)
  }

  const Section = ({ id, title, icon: Icon, children }: { id: string; title: string; icon: any; children: ReactNode }) => {
    const isExpanded = expandedSections.has(id)
    return (
      <div className="section-card">
        <button
          onClick={() => toggleSection(id)}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-100">{title}</h3>
          </div>
          {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </button>
        {isExpanded && <div className="mt-4 space-y-4">{children}</div>}
      </div>
    )
  }

  return (
    <div className="pt-20 space-y-6">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-4xl font-bold gradient-text">Chapitre 2 — Les Granulats</h1>
        <p className="text-slate-400">Étude des granulats et de leurs caractéristiques</p>
      </div>

      <Section id="intro" title="Définition et Importance" icon={Beaker}>
        <div className="space-y-4">
          <div className="bg-slate-800/50 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <p className="text-slate-300">
              Un <strong className="text-purple-400">granulat usuel</strong> est un ensemble de grains minéraux (fragments de roche) de taille variable, comprise entre <strong className="text-primary-400">0 et 80 mm</strong>, pouvant être agglomérés par un liant.
            </p>
          </div>
          <p className="text-slate-300">
            Les granulats sont la matière première essentielle du BTP :
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
            <li>Fabrication du <strong className="text-accent-400">béton</strong> et du <strong className="text-accent-400">mortier</strong></li>
            <li>Construction des <strong className="text-accent-400">chaussées</strong> (routes, autoroutes)</li>
            <li>Consommation routière : 90 à 100% de granulats dans toutes les couches</li>
          </ul>
        </div>
      </Section>

      <Section id="classes" title="Classes Granulaires" icon={Layers}>
        <div className="space-y-4">
          <p className="text-slate-300">
            Un granulat est caractérisé par sa <strong className="text-purple-400">classe granulaire d/D</strong> où :
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
            <li><strong className="text-accent-400">d</strong> = plus petite dimension représentative des grains (premier tamis à atteindre 5% de tamisat cumulé)</li>
            <li><strong className="text-accent-400">D</strong> = plus grande dimension représentative (dernier tamis avec 5% de refus cumulé)</li>
            <li>d et D sont des <strong className="text-primary-400">ouvertures de tamis normalisés</strong> à maille carrée, exprimées en mm</li>
          </ul>
          <div className="bg-slate-800/50 border-l-4 border-accent-500 p-4 rounded-r-lg">
            <p className="text-slate-300">
              <strong className="text-accent-400">Exemple :</strong> Un granulat dont peu de masse passe à 4 mm (d) et dont la majorité passe à 12 mm (D) → <strong className="text-primary-400">granulat 4/12</strong>
            </p>
          </div>
        </div>
      </Section>

      <Section id="terminologie" title="Terminologie (Classification normalisée)" icon={Activity}>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Définition</th>
                <th>Usage principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong className="text-purple-400">Sable</strong></td>
                <td>0/D avec D ≤ 4 mm</td>
                <td>Mortier, béton</td>
              </tr>
              <tr>
                <td><strong className="text-purple-400">Gravillon (gravier)</strong></td>
                <td>d/D avec d ≥ 2 mm et D ≥ 4 mm</td>
                <td>Béton</td>
              </tr>
              <tr>
                <td><strong className="text-purple-400">Grave</strong></td>
                <td>0/D avec 4 {'<'} D ≤ 90 mm</td>
                <td>Couches de fondation/base de chaussées</td>
              </tr>
              <tr>
                <td><strong className="text-purple-400">Filler</strong></td>
                <td>Majorité des grains ≤ 0,063 mm</td>
                <td>Ajout dans ciments, enrobés</td>
              </tr>
              <tr>
                <td><strong className="text-purple-400">Enrochement</strong></td>
                <td>D {'>'} 90 mm</td>
                <td>Protection de berges, digues</td>
              </tr>
              <tr>
                <td><strong className="text-purple-400">Ballast</strong></td>
                <td>31,5 à 50 mm</td>
                <td>Lit de voies ferrées</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="production" title="Production des Granulats" icon={Zap}>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">3.1 Granulats alluvionnaires (roulés)</h4>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li><strong className="text-accent-400">Origine</strong> : dégradation naturelle de roches (dépôts meubles)</li>
              <li><strong className="text-accent-400">Caractéristique</strong> : grains <strong className="text-primary-400">arrondis</strong> et surface <strong className="text-primary-400">polie</strong></li>
              <li><strong className="text-accent-400">Exploitation</strong> : simple → lavage + criblage (tamisage sur crible vibrant)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">3.2 Granulats concassés</h4>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li><strong className="text-accent-400">Origine</strong> : industrielle, par concassage de roches naturelles massives</li>
              <li><strong className="text-accent-400">Caractéristique</strong> : aspect <strong className="text-primary-400">anguleux</strong> et arêtes <strong className="text-primary-400">vives</strong></li>
              <li><strong className="text-accent-400">Extraction</strong> :
                <ul className="ml-4 mt-2 space-y-1">
                  <li>Roches dures → <strong className="text-primary-400">abattage à l'explosif</strong></li>
                  <li>Roches moins dures → <strong className="text-primary-400">pelle mécanique</strong></li>
                </ul>
              </li>
              <li><strong className="text-accent-400">Traitement</strong> (3 étapes) : <strong className="text-primary-400">concassage</strong> (primaire, secondaire, tertiaire) → <strong className="text-primary-400">criblage</strong> → <strong className="text-primary-400">stockage</strong> (à l'air libre, en silos ou trémies)</li>
            </ul>
          </div>
        </div>
      </Section>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="section-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <Beaker className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100">Simulateur granulométrique</h3>
              <p className="text-slate-400 text-sm">Visualisez le tamisat et calculez le module de finesse du sable.</p>
            </div>
          </div>
          <GranulometryCalculator />
        </div>

        <div className="section-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-slate-800/60 flex items-center justify-center">
              <Activity className="w-5 h-5 text-slate-200" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100">Propreté des granulats</h3>
              <p className="text-slate-400 text-sm">Évaluez l'équivalent de sable et affichez la classification.</p>
            </div>
          </div>
          <SandCleanlinessCalculator />
        </div>
      </div>
    </div>
  )
}

function GranulometryCalculator() {
  const [values, setValues] = useState({ t4: 5, t2: 10, t1: 20, t05: 18, t025: 16, t0125: 14, fond: 17 })
  const total = Object.values(values).reduce((acc, value) => acc + value, 0)
  const cumulative = {
    t4: 100 - (values.t4 / total) * 100,
    t2: 100 - ((values.t4 + values.t2) / total) * 100,
    t1: 100 - ((values.t4 + values.t2 + values.t1) / total) * 100,
    t05: 100 - ((values.t4 + values.t2 + values.t1 + values.t05) / total) * 100,
    t025: 100 - ((values.t4 + values.t2 + values.t1 + values.t05 + values.t025) / total) * 100,
    t0125: 100 - ((values.t4 + values.t2 + values.t1 + values.t05 + values.t025 + values.t0125) / total) * 100,
  }
  const Mf = (cumulative.t4 + cumulative.t2 + cumulative.t1 + cumulative.t05 + cumulative.t025 + cumulative.t0125) / 100

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {([
          ['4 mm', 't4'],
          ['2 mm', 't2'],
          ['1 mm', 't1'],
          ['0.5 mm', 't05'],
          ['0.25 mm', 't025'],
          ['0.125 mm', 't0125'],
          ['Fond', 'fond'],
        ] as const).map(([label, key]) => (
          <div key={key}>
            <label className="block text-sm text-slate-400 mb-2">Refus {label}</label>
            <input
              type="number"
              value={values[key]}
              onChange={(e) => setValues({ ...values, [key]: parseFloat(e.target.value) || 0 })}
              className="simulation-input"
            />
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl bg-slate-900/80 p-5 border border-slate-700/60">
          <p className="text-sm text-slate-400">Module de finesse Mf</p>
          <p className="mt-3 text-3xl font-semibold text-purple-400">{Mf.toFixed(2)}</p>
        </div>
        <div className="rounded-3xl bg-slate-900/80 p-5 border border-slate-700/60">
          <p className="text-sm text-slate-400">Type de sable</p>
          <p className="mt-3 text-3xl font-semibold text-emerald-400">{Mf >= 2.2 && Mf <= 2.8 ? 'Optimal' : Mf < 2.2 ? 'Fin' : 'Grossier'}</p>
        </div>
      </div>

      <div className="rounded-3xl bg-slate-900/80 border border-slate-700/60 p-4">
        <p className="text-sm text-slate-400 mb-4">Distribution granulométrique cumulée</p>
        <div className="grid gap-2">
          {Object.entries(cumulative).map(([label, value]) => (
            <div key={label} className="space-y-1">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{label.replace('t', '')}</span>
                <span>{value.toFixed(1)}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500" style={{ width: `${Math.min(100, Math.max(5, value))}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SandCleanlinessCalculator() {
  const [h1, setH1] = useState(30)
  const [h2, setH2] = useState(22)
  const es = h1 > 0 ? (h2 / h1) * 100 : 0

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm text-slate-400 mb-2">Hauteur totale h1</label>
          <input
            type="number"
            value={h1}
            onChange={(e) => setH1(parseFloat(e.target.value) || 0)}
            className="simulation-input"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-2">Hauteur du sable propre h2</label>
          <input
            type="number"
            value={h2}
            onChange={(e) => setH2(parseFloat(e.target.value) || 0)}
            className="simulation-input"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl bg-slate-900/80 p-5 border border-slate-700/60">
          <p className="text-sm text-slate-400">ES</p>
          <p className="mt-3 text-3xl font-semibold text-accent-400">{es.toFixed(1)}%</p>
        </div>
        <div className="rounded-3xl bg-slate-900/80 p-5 border border-slate-700/60">
          <p className="text-sm text-slate-400">Type recommandé</p>
          <p className="mt-3 text-3xl font-semibold text-green-400">{es > 85 ? 'Très propre' : es >= 75 ? 'Propre' : es >= 65 ? 'Admissible' : 'Argileux'}</p>
        </div>
        <div className="rounded-3xl bg-slate-900/80 p-5 border border-slate-700/60">
          <p className="text-sm text-slate-400">Recommandation</p>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            {es > 85 ? 'Risque de manque de plasticité' : es >= 75 ? 'Convient parfaitement' : es >= 65 ? 'Admissible pour béton courant' : 'Rejeter pour béton de qualité'}
          </p>
        </div>
      </div>
    </div>
  )
}
