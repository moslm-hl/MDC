import { useState, type ReactNode } from 'react'
import { ChevronDown, ChevronUp, Calculator, Thermometer, Activity, Zap } from 'lucide-react'

export function Chapter1() {
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
            <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary-400" />
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
        <h1 className="text-4xl font-bold gradient-text">Chapitre 1 — Propriétés des Matériaux de Construction</h1>
        <p className="text-slate-400">Étude des propriétés physiques et mécaniques des matériaux</p>
      </div>

      <Section id="intro" title="Introduction" icon={Activity}>
        <div className="space-y-4">
          <p className="text-slate-300">
            Les <strong className="text-primary-400">matériaux de construction (MDC)</strong> sont utilisés dans deux grands secteurs :
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li><strong className="text-accent-400">Bâtiment</strong></li>
            <li><strong className="text-accent-400">Travaux publics</strong> : VRD (voiries et réseaux divers), routes, ouvrages d'art → ensemble désigné par <strong className="text-primary-400">BTP</strong></li>
          </ul>
          <p className="text-slate-300">
            Les principaux matériaux sont : le bois, l'acier, et les matériaux issus de la transformation de produits de carrières (roches naturelles), plus ou moins élaborés : liants, béton, mortier…
          </p>
          <div className="bg-slate-800/50 border-l-4 border-primary-500 p-4 rounded-r-lg">
            <p className="text-slate-300 italic">
              Un matériau est sélectionné pour ses <strong className="text-primary-400">propriétés particulières</strong> en vue d'un <strong className="text-primary-400">usage spécifique</strong>. Connaître ces propriétés permet de prévoir la capacité du matériau à résister dans des conditions diverses.
            </p>
          </div>
        </div>
      </Section>

      <Section id="physiques" title="Propriétés Physiques" icon={Calculator}>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">1.1 Masse Volumique</h4>
            <p className="text-slate-300 mb-4">Il existe deux types de masse volumique :</p>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Définition</th>
                    <th>Formule</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong className="text-primary-400">Masse vol. apparente</strong> ρapp</td>
                    <td>Masse par unité de volume <strong>total</strong> (vides inclus)</td>
                    <td className="font-mono">ρapp = Ms / Vt</td>
                  </tr>
                  <tr>
                    <td><strong className="text-primary-400">Masse vol. absolue</strong> ρs</td>
                    <td>Masse par unité de volume de matière <strong>sans les vides</strong></td>
                    <td className="font-mono">ρs = Ms / Vs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 space-y-2 text-slate-300">
              <p><strong>Avec :</strong></p>
              <ul className="list-disc list-inside ml-4">
                <li><strong className="text-accent-400">Ms</strong> = masse du matériau sec</li>
                <li><strong className="text-accent-400">Vt</strong> = volume total (matière + vides)</li>
                <li><strong className="text-accent-400">Vs</strong> = Vt – Vv = volume de la matière solide</li>
                <li><strong className="text-accent-400">Vv</strong> = volume des pores (vides)</li>
              </ul>
              <p className="mt-2"><strong className="text-primary-400">Unité :</strong> kg/m³ ou g/cm³</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">1.2 Densité</h4>
            <p className="text-slate-300 mb-4">
              La densité est le rapport de la masse volumique du matériau sur celle de l'eau pure à 4°C :
            </p>
            <div className="formula-box">
              <p className="text-center text-lg">d = ρ / ρ<sub>eau</sub>  avec  ρ<sub>eau</sub> = 1000 kg/m³</p>
            </div>
            <p className="text-slate-300 mt-4"><strong>Exemples de valeurs :</strong></p>
            <div className="table-container mt-2">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Matériau</th>
                    <th>Masse vol. absolue (kg/m³)</th>
                    <th>Densité d</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Sable</td><td>2600 à 2700</td><td>2,6 à 2,7</td></tr>
                  <tr><td>Calcaire</td><td>2400 à 2600</td><td>2,4 à 2,6</td></tr>
                  <tr><td>Granite</td><td>2600 à 2900</td><td>2,6 à 2,9</td></tr>
                  <tr><td>Ciment</td><td>3000 à 3200</td><td>3,0 à 3,2</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">1.3 Porosité et Compacité</h4>
            <div className="space-y-4">
              <div>
                <p className="text-slate-300 mb-2"><strong>Porosité</strong> : volume des vides par unité de volume total</p>
                <div className="formula-box">
                  <p className="text-center text-lg">p = (V<sub>v</sub> / V<sub>t</sub>) × 100  (%)</p>
                </div>
              </div>
              <div>
                <p className="text-slate-300 mb-2"><strong>Compacité</strong> : volume de la matière solide par unité de volume total</p>
                <div className="formula-box">
                  <p className="text-center text-lg">c = (V<sub>s</sub> / V<sub>t</sub>) × 100  (%)</p>
                </div>
              </div>
              <div className="bg-slate-800/50 border-l-4 border-accent-500 p-4 rounded-r-lg">
                <p className="text-slate-300"><strong className="text-accent-400">Relation fondamentale :</strong> p + c = 100%</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">1.4 Teneur en Eau</h4>
            <p className="text-slate-300 mb-4">Pourcentage d'humidité du matériau à l'état naturel :</p>
            <div className="formula-box">
              <p className="text-center text-lg">W = ((G<sub>h</sub> - G<sub>s</sub>) / G<sub>s</sub>) × 100  (%)</p>
            </div>
            <ul className="list-disc list-inside text-slate-300 ml-4 mt-4">
              <li><strong className="text-accent-400">Gs</strong> = masse de l'échantillon sec (après passage à l'étuve)</li>
              <li><strong className="text-accent-400">Gh</strong> = masse de l'échantillon à l'état naturel</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">1.5 Absorption</h4>
            <p className="text-slate-300 mb-4">Capacité d'un matériau à absorber l'eau :</p>
            <div className="formula-box">
              <p className="text-center text-lg">Ab = ((M<sub>a</sub> - M<sub>s</sub>) / M<sub>s</sub>) × 100  (%)</p>
            </div>
            <ul className="list-disc list-inside text-slate-300 ml-4 mt-4">
              <li><strong className="text-accent-400">Ms</strong> = masse sèche (après étuvage)</li>
              <li><strong className="text-accent-400">Ma</strong> = masse humide après immersion</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">1.6 Conductivité Thermique λ</h4>
            <div className="bg-slate-800/50 border-l-4 border-primary-500 p-4 rounded-r-lg mb-4">
              <p className="text-slate-300 italic">
                Quantité de chaleur transférée en une unité de temps, au travers d'un matériau d'une unité de surface et d'une unité d'épaisseur, par degré Celsius d'écart de température.
              </p>
            </div>
            <p className="text-slate-300 mb-4"><strong className="text-primary-400">Unité :</strong> W·m⁻¹·K⁻¹</p>
            <p className="text-slate-300 mb-4">
              La conductivité varie selon la <strong className="text-accent-400">porosité</strong>, l'<strong className="text-accent-400">humidité</strong> et la <strong className="text-accent-400">nature</strong> du matériau.
            </p>
            <p className="text-slate-300 mb-2"><strong>Tableau comparatif :</strong></p>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Matériau</th>
                    <th>λ (W·m⁻¹·K⁻¹)</th>
                    <th>Commentaire</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Acier doux</td><td>52</td><td>Très conducteur</td></tr>
                  <tr><td>Pierre naturelle non poreuse</td><td>3,5</td><td>Conducteur</td></tr>
                  <tr><td>Béton ordinaire</td><td>1,6 à 2,1</td><td>Conducteur</td></tr>
                  <tr><td>Marbre</td><td>2,5</td><td>Conducteur moyen</td></tr>
                  <tr><td>Verre</td><td>1 à 1,15</td><td>Conducteur moyen</td></tr>
                  <tr><td>Briques</td><td>0,3 à 0,96</td><td>Semi-conducteur</td></tr>
                  <tr><td>Plâtre sec</td><td>0,4</td><td>Semi-conducteur</td></tr>
                  <tr><td>Bois</td><td>0,13 à 0,2</td><td>Isolant moyen</td></tr>
                  <tr><td>Béton cellulaire</td><td>0,14 à 0,23</td><td>Bon isolant</td></tr>
                  <tr><td>Pierre naturelle poreuse</td><td>0,55</td><td>Semi-conducteur</td></tr>
                  <tr><td>Laine</td><td>0,05</td><td>Très bon isolant</td></tr>
                  <tr><td>Liège</td><td>0,05</td><td>Très bon isolant</td></tr>
                  <tr><td>Laine de roche</td><td>0,035</td><td>Excellent isolant</td></tr>
                  <tr><td>Polystyrène expansé</td><td>0,03</td><td>Excellent isolant</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-slate-800/50 border-l-4 border-accent-500 p-4 rounded-r-lg mt-4">
              <p className="text-slate-300">
                Plus λ est faible → <strong className="text-accent-400">meilleur isolant thermique</strong>.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="mecaniques" title="Propriétés Mécaniques" icon={Zap}>
        <div className="space-y-4">
          <p className="text-slate-300">
            Lorsqu'une force est appliquée sur un élément, des <strong className="text-primary-400">efforts intérieurs</strong> naissent pour équilibrer la force extérieure. Ces efforts sont exprimés en <strong className="text-primary-400">contraintes</strong>.
          </p>
          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">Types de sollicitations courantes :</h4>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li><strong className="text-accent-400">Compression</strong> : écrasement</li>
              <li><strong className="text-accent-400">Traction</strong> : étirement</li>
              <li><strong className="text-accent-400">Cisaillement</strong> : glissement d'une partie par rapport à une autre</li>
              <li><strong className="text-accent-400">Flexion</strong> : courbure sous charge transversale</li>
              <li><strong className="text-accent-400">Torsion</strong> : rotation/vrillage</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">Résistance</h4>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>La <strong className="text-primary-400">contrainte maximale</strong> supportée par un matériau avant rupture est appelée sa <strong className="text-primary-400">résistance</strong></li>
              <li><strong className="text-primary-400">Unité :</strong> Méga Pascal (<strong className="text-accent-400">MPa</strong>) → 1 MPa = 1 N/mm²</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
