import { useState } from 'react'
import { Calculator, Beaker, FlaskConical, Building2, Thermometer, Activity, Zap } from 'lucide-react'

export function Simulations() {
  const [activeTab, setActiveTab] = useState('chapter1')

  const tabs = [
    { id: 'chapter1', label: 'Propriétés des Matériaux de Construction', icon: Calculator },
    { id: 'chapter2', label: 'Chapitre 2', icon: Beaker },
    { id: 'chapter3', label: 'Chapitre 3', icon: FlaskConical },
    { id: 'chapter4', label: 'Chapitre 4', icon: Building2 },
  ]

  return (
    <div className="pt-20 space-y-6">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-4xl font-bold gradient-text">Simulations Interactives</h1>
        <p className="text-slate-400">Explorez les concepts avec des simulateurs d'ingénierie</p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-primary-600/20 text-primary-400 border border-primary-500/30'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          )
        })}
      </div>

      {activeTab === 'chapter1' && <Chapter1Simulations />}
      {activeTab === 'chapter2' && <Chapter2Simulations />}
      {activeTab === 'chapter3' && <Chapter3Simulations />}
      {activeTab === 'chapter4' && <Chapter4Simulations />}
    </div>
  )
}

function Chapter1Simulations() {
  const [ms, setMs] = useState(100)
  const [vt, setVt] = useState(0.05)
  const [vv, setVv] = useState(0.01)

  const vs = vt - vv
  const rhoApp = ms / vt
  const rhoS = vs > 0 ? ms / vs : 0
  const porosity = (vv / vt) * 100
  const compactness = (vs / vt) * 100

  return (
    <div className="space-y-6">
      <div className="section-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <Calculator className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-100">Calculateur de Masse Volumique et Porosité</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-2">Masse sèche (Ms) [kg]</label>
              <input
                type="number"
                value={ms}
                onChange={(e) => setMs(parseFloat(e.target.value) || 0)}
                className="simulation-input"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Volume total (Vt) [m³]</label>
              <input
                type="number"
                step="0.001"
                value={vt}
                onChange={(e) => setVt(parseFloat(e.target.value) || 0)}
                className="simulation-input"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Volume des vides (Vv) [m³]</label>
              <input
                type="number"
                step="0.001"
                value={vv}
                onChange={(e) => setVv(parseFloat(e.target.value) || 0)}
                className="simulation-input"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-sm text-slate-400 mb-1">Masse volumique apparente (ρapp)</p>
              <p className="text-2xl font-bold text-primary-400">{rhoApp.toFixed(0)} kg/m³</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-sm text-slate-400 mb-1">Masse volumique absolue (ρs)</p>
              <p className="text-2xl font-bold text-accent-400">{rhoS.toFixed(0)} kg/m³</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-sm text-slate-400 mb-1">Porosité (p)</p>
              <p className="text-2xl font-bold text-green-400">{porosity.toFixed(1)}%</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-sm text-slate-400 mb-1">Compacité (c)</p>
              <p className="text-2xl font-bold text-orange-400">{compactness.toFixed(1)}%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
            <Thermometer className="w-5 h-5 text-orange-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-100">Comparateur de Conductivité Thermique</h3>
        </div>
        
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Matériau</th>
                <th>λ (W·m⁻¹·K⁻¹)</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Acier doux</td><td>52</td><td className="text-red-400">Très conducteur</td></tr>
              <tr><td>Béton ordinaire</td><td>1.6-2.1</td><td className="text-orange-400">Conducteur</td></tr>
              <tr><td>Briques</td><td>0.3-0.96</td><td className="text-yellow-400">Semi-conducteur</td></tr>
              <tr><td>Bois</td><td>0.13-0.2</td><td className="text-green-400">Isolant moyen</td></tr>
              <tr><td>Polystyrène expansé</td><td>0.03</td><td className="text-green-400">Excellent isolant</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function Chapter2Simulations() {
  const [refus, setRefus] = useState({
    t4: 5,
    t2: 15,
    t1: 25,
    t05: 20,
    t025: 15,
    t0125: 10,
    fond: 10,
  })

  const total = Object.values(refus).reduce((a, b) => a + b, 0)
  const r4 = (refus.t4 / total) * 100
  const r2 = r4 + (refus.t2 / total) * 100
  const r1 = r2 + (refus.t1 / total) * 100
  const r05 = r1 + (refus.t05 / total) * 100
  const r025 = r05 + (refus.t025 / total) * 100
  const r0125 = r025 + (refus.t0125 / total) * 100

  const mf = (r4 + r2 + r1 + r05 + r025 + r0125) / 100
  const sandType = mf < 2.2 ? 'Sable fin' : mf > 2.8 ? 'Sable grossier' : 'Sable optimal'

  return (
    <div className="space-y-6">
      <div className="section-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <Beaker className="w-5 h-5 text-purple-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-100">Analyse Granulométrique</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-sm text-slate-400 mb-2">Refus sur chaque tamis (g)</p>
            {Object.entries(refus).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm text-slate-400 mb-2">
                  Tamis {key === 'fond' ? 'Fond' : key.replace('t', '') + ' mm'}
                </label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setRefus({ ...refus, [key]: parseFloat(e.target.value) || 0 })}
                  className="simulation-input"
                />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-sm text-slate-400 mb-1">Module de finesse (Mf)</p>
              <p className="text-3xl font-bold text-primary-400">{mf.toFixed(2)}</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-sm text-slate-400 mb-1">Type de sable</p>
              <p className={`text-xl font-bold ${mf >= 2.2 && mf <= 2.8 ? 'text-green-400' : 'text-yellow-400'}`}>
                {sandType}
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-sm text-slate-400 mb-1">Total</p>
              <p className="text-xl font-bold text-accent-400">{total} g</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-slate-400 mb-4">Courbe granulométrique (Tamisats cumulés)</p>
          <div className="h-48 flex items-end gap-2 bg-slate-800/30 rounded-lg p-4">
            {[
              { label: '4', value: 100 - r4 },
              { label: '2', value: 100 - r2 },
              { label: '1', value: 100 - r1 },
              { label: '0.5', value: 100 - r05 },
              { label: '0.25', value: 100 - r025 },
              { label: '0.125', value: 100 - r0125 },
            ].map((item) => (
              <div key={item.label} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-primary-600 to-accent-600 rounded-t transition-all duration-300"
                  style={{ height: `${Math.max(5, item.value)}%` }}
                />
                <span className="text-xs text-slate-400 mt-2">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Chapter3Simulations() {
  const [dosage, setDosage] = useState(350)
  const [cementType, setCementType] = useState('CEM I')

  const heatCoefficients: Record<string, number> = {
    'CEM I': 500,
    'CEM II': 450,
    'CEM III': 400,
  }

  const deltaT = (dosage * heatCoefficients[cementType]) / 2400

  return (
    <div className="space-y-6">
      <div className="section-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
            <FlaskConical className="w-5 h-5 text-orange-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-100">Simulation de Chaleur d'Hydratation</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-2">Dosage en ciment (kg/m³)</label>
              <input
                type="number"
                value={dosage}
                onChange={(e) => setDosage(parseFloat(e.target.value) || 0)}
                className="simulation-input"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Type de ciment</label>
              <select
                value={cementType}
                onChange={(e) => setCementType(e.target.value)}
                className="simulation-input"
              >
                <option value="CEM I">CEM I - Portland pur</option>
                <option value="CEM II">CEM II - Portland composé</option>
                <option value="CEM III">CEM III - Haut fourneau</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-sm text-slate-400 mb-1">Élévation de température (ΔT)</p>
              <p className="text-3xl font-bold text-orange-400">{deltaT.toFixed(1)} °C</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-sm text-slate-400 mb-1">Coefficient de chaleur</p>
              <p className="text-xl font-bold text-accent-400">{heatCoefficients[cementType]} J/g</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Chapter4Simulations() {
  const [c, setC] = useState(350)
  const [e, setE] = useState(175)
  const [fcc, setFcc] = useState(42.5)

  const ec = e / c
  const vc = c / 3.1
  const ve = e
  const k = 4.9
  const feret = k * fcc * Math.pow(vc / (vc + ve), 2)

  return (
    <div className="space-y-6">
      <div className="section-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
            <Building2 className="w-5 h-5 text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-100">Formule de Feret - Résistance du Béton</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-2">Dosage en ciment C (kg/m³)</label>
              <input
                type="number"
                value={c}
                onChange={(e) => setC(parseFloat(e.target.value) || 0)}
                className="simulation-input"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Dosage en eau E (kg/m³)</label>
              <input
                type="number"
                value={e}
                onChange={(e) => setE(parseFloat(e.target.value) || 0)}
                className="simulation-input"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Classe du ciment fc (MPa)</label>
              <input
                type="number"
                step="0.1"
                value={fcc}
                onChange={(e) => setFcc(parseFloat(e.target.value) || 0)}
                className="simulation-input"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-sm text-slate-400 mb-1">Rapport E/C</p>
              <p className="text-3xl font-bold text-primary-400">{ec.toFixed(2)}</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-sm text-slate-400 mb-1">Résistance estimée fc28 (MPa)</p>
              <p className="text-3xl font-bold text-green-400">{feret.toFixed(1)}</p>
            </div>
            <div className="formula-box">
              <p className="text-xs text-center">fc28 = k × fc × (Vc/(Vc+Ve))²</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <Activity className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-100">Classes de Consistance (Slump Test)</h3>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Classe</th>
                <th>Affaissement (mm)</th>
                <th>Ouvrabilité</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>S1</td><td>10-40</td><td>Ferme</td></tr>
              <tr><td>S2</td><td>50-90</td><td>Plastique</td></tr>
              <tr><td>S3</td><td>100-150</td><td>Très plastique</td></tr>
              <tr><td>S4</td><td>160-210</td><td>Fluide</td></tr>
              <tr><td>S5</td><td>≥ 220</td><td>Très fluide</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
