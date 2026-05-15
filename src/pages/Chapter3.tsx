import { useState, type ReactNode } from 'react'
import { ChevronDown, ChevronUp, FlaskConical, Factory, Zap, Activity } from 'lucide-react'

export function Chapter3() {
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

  const Section = ({ id, title, icon: Icon, children }: { id: string, title: string, icon: any, children: ReactNode }) => {
    const isExpanded = expandedSections.has(id)
    return (
      <div className="section-card">
        <button
          onClick={() => toggleSection(id)}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-orange-400" />
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
        <h1 className="text-4xl font-bold gradient-text">Chapitre 3 — Les Liants Minéraux</h1>
        <p className="text-slate-400">Ciments, Chaux, Plâtre - Fabrication et propriétés</p>
      </div>

      <Section id="intro" title="Définition Générale" icon={FlaskConical}>
        <div className="space-y-4">
          <div className="bg-slate-800/50 border-l-4 border-orange-500 p-4 rounded-r-lg">
            <p className="text-slate-300">
              <strong className="text-orange-400">Liant minéral</strong> : matériau d'origine minérale, finement broyé (en poudre), qui mélangé à l'eau forme une pâte plastique qui <strong className="text-primary-400">durcit avec le temps</strong>.
            </p>
          </div>
          <p className="text-slate-300"><strong>Deux grands types :</strong></p>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Durcissement</th>
                  <th>Solubilité</th>
                  <th>Exemples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong className="text-orange-400">Hydrauliques</strong></td>
                  <td>En milieu humide</td>
                  <td>Insolubles dans l'eau</td>
                  <td>Ciments, chaux hydraulique</td>
                </tr>
                <tr>
                  <td><strong className="text-orange-400">Aériens</strong></td>
                  <td>À l'air sec</td>
                  <td>Solubles dans l'eau</td>
                  <td>Plâtre, chaux aérienne</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section id="ciments" title="Les Ciments" icon={Factory}>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">1.1 Principe de Fabrication</h4>
            
            <div className="space-y-4">
              <div>
                <p className="text-slate-300 font-bold mb-2">a) Extraction et concassage</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Constituant principal : le <strong className="text-primary-400">clinker</strong> → obtenu par cuisson d'un mélange de <strong className="text-accent-400">calcaire (80%)</strong> et <strong className="text-accent-400">argile (20%)</strong></li>
                  <li>Le <strong className="text-accent-400">calcaire</strong> apporte : CaO (chaux)</li>
                  <li>L'<strong className="text-accent-400">argile</strong> apporte : SiO₂ (silice), Al₂O₃ (alumine), Fe₂O₃ (oxyde de fer)</li>
                  <li>Extraction en carrières à ciel ouvert → concassage → granules ≤ 50 mm</li>
                </ul>
              </div>

              <div>
                <p className="text-slate-300 font-bold mb-2">b) Préparation du cru (farine)</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li><strong className="text-accent-400">Pré-homogénéisation</strong> : mélange homogène calcaire + argile en couches horizontales</li>
                  <li><strong className="text-accent-400">Broyage sécheur</strong> : broyage très fin + élimination de l'humidité → <strong className="text-primary-400">farine (cru)</strong></li>
                  <li><strong className="text-accent-400">Homogénéisation finale</strong> : en grand silo avec brassage à l'air comprimé</li>
                </ul>
              </div>

              <div>
                <p className="text-slate-300 font-bold mb-2">c) Cuisson du cru → clinker</p>
                <p className="text-slate-300 mb-2">Préchauffage dans une <strong className="text-primary-400">tour à cyclones</strong> par échange de chaleur avec les gaz chauds :</p>
                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Température</th>
                        <th>Transformation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>350°C</td><td>Déshydratation de l'argile</td></tr>
                      <tr><td>550°C</td><td>Décomposition de l'argile en oxydes (SiO₂, Al₂O₃, Fe₂O₃)</td></tr>
                      <tr><td>900°C</td><td>Décarbonatation du calcaire : CaCO₃ → CaO + CO₂</td></tr>
                      <tr><td><strong className="text-primary-400">1450°C</strong></td><td><strong className="text-primary-400">Clinkérisation</strong> dans le four rotatif → formation du clinker</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-slate-300 mt-4">
                  Après refroidissement (grilles + ventilateurs), le clinker se présente en <strong className="text-primary-400">granules gris foncé, ø ≈ 2 cm</strong>.
                </p>
              </div>

              <div>
                <p className="text-slate-300 font-bold mb-2">d) Broyage du clinker → ciment</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Broyage dans des <strong className="text-primary-400">broyeurs à boulets</strong> → particules ≤ 80 μm</li>
                  <li>Ajout de <strong className="text-accent-400">gypse (3 à 5%)</strong> : sulfate de calcium hydraté CaSO₄·2H₂O (régulateur de prise)</li>
                  <li>Éventuels ajouts minéraux → <strong className="text-primary-400">ciment Portland</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">1.2 Constituants de Base du Clinker</h4>
            <p className="text-slate-300 mb-4">Notation abrégée : C = CaO, S = SiO₂, A = Al₂O₃, F = Fe₂O₃</p>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Minéral</th>
                    <th>Formule</th>
                    <th>% dans clinker</th>
                    <th>Rôle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong className="text-orange-400">Silicate tricalcique (alite)</strong></td>
                    <td>C3S</td>
                    <td>50 à 65%</td>
                    <td>Résistance initiale élevée</td>
                  </tr>
                  <tr>
                    <td><strong className="text-orange-400">Silicate bicalcique (bélite)</strong></td>
                    <td>C2S</td>
                    <td>15 à 25%</td>
                    <td>Résistance à long terme</td>
                  </tr>
                  <tr>
                    <td><strong className="text-orange-400">Aluminate tricalcique</strong></td>
                    <td>C3A</td>
                    <td>8 à 12%</td>
                    <td>Durcissement rapide, <strong className="text-red-400">sensible aux sulfates</strong></td>
                  </tr>
                  <tr>
                    <td><strong className="text-orange-400">Ferro-aluminate tetracalcique</strong></td>
                    <td>C4AF</td>
                    <td>6 à 10%</td>
                    <td>Contribution secondaire</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-slate-800/50 border-l-4 border-accent-500 p-4 rounded-r-lg mt-4">
              <p className="text-slate-300">
                Le clinker doit contenir au moins <strong className="text-accent-400">2/3 de silicates de calcium</strong> (C3S + C2S).
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">1.3 Ajouts Minéraux du Ciment</h4>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Ajout</th>
                    <th>Symbole</th>
                    <th>Nature</th>
                    <th>Propriété</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Calcaire</td><td>L</td><td>Calcaire broyé</td><td>Filler inerte</td></tr>
                  <tr><td>Laitier granulé de haut fourneau</td><td>S</td><td>Sous-produit sidérurgie</td><td>Hydraulique</td></tr>
                  <tr><td>Pouzzolanes naturelles</td><td>P</td><td>Matériaux volcaniques</td><td>Pouzzolanique</td></tr>
                  <tr><td>Pouzzolanes calcinées</td><td>Q</td><td>Argiles/schistes activés thermiquement</td><td>Pouzzolanique</td></tr>
                  <tr><td>Cendres volantes siliceuses</td><td>V</td><td>Résidu centrales thermiques</td><td>Pouzzolanique</td></tr>
                  <tr><td>Cendres volantes calciques</td><td>W</td><td>Résidu centrales thermiques</td><td>Hydraulique</td></tr>
                  <tr><td>Fumée de silice</td><td>D</td><td>Sous-produit industrie silicium</td><td>Pouzzolanique</td></tr>
                  <tr><td>Schistes calcinés</td><td>T</td><td>Schistes à 800°C</td><td>Pouzzolanique + hydraulique</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">1.4 Classification des Ciments (5 types)</h4>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Nom</th>
                    <th>Composition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong className="text-primary-400">CEM I</strong></td><td>Ciment Portland pur</td><td>Clinker ≥ 95%</td></tr>
                  <tr><td><strong className="text-primary-400">CEM II</strong></td><td>Ciment Portland composé</td><td>Clinker ≥ 65% + ajout</td></tr>
                  <tr><td><strong className="text-primary-400">CEM III</strong></td><td>Ciment de haut fourneau</td><td>36 à 95% laitier + clinker</td></tr>
                  <tr><td><strong className="text-primary-400">CEM IV</strong></td><td>Ciment pouzzolanique</td><td>10 à 55% pouzzolane + clinker</td></tr>
                  <tr><td><strong className="text-primary-400">CEM V</strong></td><td>Ciment composé</td><td>Clinker + pouzzolane + laitier</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-300 mt-4"><strong>Sous-classes A, B, C</strong> selon le % d'ajout.</p>
            <p className="text-slate-300 mt-2"><strong>Domaines d'utilisation :</strong></p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li><strong className="text-accent-400">CEM I</strong> → Usage général, béton armé haute résistance</li>
              <li><strong className="text-accent-400">CEM II</strong> → Maçonnerie, béton armé, travaux massifs</li>
              <li><strong className="text-accent-400">CEM III/A-B, CEM IV, CEM V</strong> → Fondations profondes, milieux agressifs, injections, pieux, eau de mer</li>
            </ul>
            <p className="text-slate-300 mt-4"><strong>Ciments spéciaux :</strong></p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li><strong className="text-primary-400">Ciment blanc</strong> : matières premières très pures (sans Fe₂O₃), refroidissement rapide → bétons colorés, carreaux, décoratifs. En Tunisie : CEM I 52,5 N et CEM II/A-L 42,5 N</li>
              <li><strong className="text-primary-400">Ciment SR3 (anti-sulfates)</strong> : C3A ≤ 3%, pour milieux agressifs (eaux séléniteuses, milieux marins). En Tunisie : CEM I 42,5 SR3</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">1.5 Hydratation du Ciment</h4>
            <p className="text-slate-300 mb-4">
              Réactions chimiques entre l'eau et les constituants du clinker → formation de <strong className="text-primary-400">CSH (silicates de calcium hydratés)</strong> + <strong className="text-primary-400">Portlandite Ca(OH)₂</strong> + dégagement de chaleur.
            </p>
            <div className="formula-box mb-4 space-y-2">
              <p className="text-center text-lg">2(C3S) + 6H₂O → CSH + 3Ca(OH)₂</p>
              <p className="text-center text-lg">2(C2S) + 4H₂O → CSH + 2Ca(OH)₂</p>
            </div>
            <div className="bg-slate-800/50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-4">
              <p className="text-slate-300">
                Les CSH forment un <strong className="text-orange-400">gel</strong> dont le développement dans le temps explique l'augmentation de la résistance mécanique → le ciment durci est une véritable <strong className="text-primary-400">roche artificielle</strong>.
              </p>
            </div>
            <p className="text-slate-300">
              L'hydratation passe par <strong className="text-primary-400">3 phases</strong> : dormante → accélération → ralentissement.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">1.6 Caractéristiques du Ciment</h4>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Caractéristique</th>
                    <th>Valeur / Détails</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong className="text-orange-400">Finesse Blaine</strong></td><td>2800 à 5000 cm²/g — plus fine = réactions plus rapides</td></tr>
                  <tr><td><strong className="text-orange-400">ρ apparente</strong></td><td>800 à 1300 kg/m³</td></tr>
                  <tr><td><strong className="text-orange-400">ρ absolue</strong></td><td>2900 à 3150 kg/m³</td></tr>
                  <tr><td><strong className="text-orange-400">Début de prise</strong></td><td>Mesure à l'aiguille de Vicat (d = 4 ± 1 mm)</td></tr>
                  <tr><td><strong className="text-orange-400">Fin de prise</strong></td><td>Aiguille s'enfonce ≤ 0,5 mm dans la pâte</td></tr>
                  <tr><td><strong className="text-orange-400">Consistance normale</strong></td><td>Sonde Vicat : d = 6 ± 1 mm ; rapport E/C déterminé</td></tr>
                  <tr><td><strong className="text-orange-400">Retrait</strong></td><td>≤ 0,8 mm/m (types : plastique, séchage, hydraulique, thermique)</td></tr>
                  <tr><td><strong className="text-orange-400">Classe de résistance</strong></td><td>32,5 / 42,5 / 52,5 MPa à 28j (sous-classes N = normale, R = rapide)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      <Section id="chaux" title="La Chaux" icon={Zap}>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">2.1 Chaux Hydraulique</h4>
            
            <div className="space-y-4">
              <div>
                <p className="text-slate-300 font-bold mb-2">a) Chaux hydraulique artificielle (CHA ou HL)</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Mélange : clinker + filler calcaire (≤ 60%)</li>
                  <li>2 types : <strong className="text-primary-400">CHA10</strong> (≥ 10 MPa à 28j) et <strong className="text-primary-400">CHA6</strong> (≥ 6 MPa à 28j)</li>
                  <li>Utilisation : pose de carreaux, enduits, maçonnerie courante, béton de propreté</li>
                </ul>
              </div>

              <div>
                <p className="text-slate-300 font-bold mb-2">b) Chaux hydraulique naturelle (NHL)</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Calcination du calcaire mélangé à 10–20% d'argile à <strong className="text-primary-400">~1000°C</strong></li>
                  <li>Chaux vive → extinction à l'eau → chaux éteinte en poudre</li>
                  <li>Contient CaO libre (≥ 15%) + silicates et aluminates de chaux</li>
                  <li>Finesse : 8000 à 11000 cm²/g</li>
                  <li>3 types : <strong className="text-primary-400">NHL 2, NHL 3,5, NHL 5</strong></li>
                  <li>Mortier souple, perméable à la vapeur d'eau, bonne adhérence</li>
                  <li>Utilisation : enduits, restauration, maçonneries anciennes ou neuves, pose de tuiles/carrelages</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">2.2 Chaux Aérienne (CL)</h4>
            <p className="text-slate-300 mb-4"><strong>Fabrication :</strong></p>
            <div className="formula-box mb-4 space-y-2">
              <p className="text-center text-lg">CaCO₃ → CaO + CO₂ &nbsp;&nbsp;&nbsp; (calcination à 900°C)</p>
              <p className="text-center text-lg">CaO + H₂O → Ca(OH)₂ &nbsp;&nbsp;&nbsp; (extinction, réaction exothermique)</p>
            </div>
            <p className="text-slate-300 mb-4"><strong>Durcissement par carbonatation (très lente) :</strong></p>
            <div className="formula-box mb-4">
              <p className="text-center text-lg">Ca(OH)₂ + CO₂ → CaCO₃ + H₂O</p>
            </div>
            <p className="text-slate-300 mb-2"><strong>Caractéristiques :</strong></p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Désignée CL 70, 80 ou 90 (% de CaO)</li>
              <li>Couleur <strong className="text-primary-400">blanchâtre</strong>, ρ apparente : 300 à 600 kg/m³, finesse : jusqu'à 15 000 cm²/g</li>
              <li><strong className="text-primary-400">Soluble dans l'eau</strong> (~1,3 g CaO / L)</li>
              <li>Élasticité + prise lente → évite la dessiccation rapide et le faïençage</li>
              <li>Propriétés <strong className="text-accent-400">bactéricide et anti-moisissure</strong></li>
              <li>Résistance à la compression : &lt; <strong className="text-primary-400">2 MPa</strong> à 1 mois</li>
              <li>Utilisation : enduits, restauration, peintures à la chaux (badigeons, patines, stucs)</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="platre" title="Le Plâtre" icon={Activity}>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">3.1 Fabrication</h4>
            <p className="text-slate-300 mb-4">
              À partir du <strong className="text-primary-400">gypse</strong> (roche blanche et tendre) : CaSO₄·2H₂O (eau = 21% de la pierre)
            </p>
            <div className="formula-box mb-4">
              <p className="text-center text-lg">CaSO₄·2H₂O → CaSO₄·0,5H₂O + 1,5H₂O &nbsp;&nbsp;&nbsp; (Déshydratation à ~150°C)</p>
            </div>
            <p className="text-slate-300">
              Refroidissement → broyage → stockage → ensachage
            </p>
            <p className="text-slate-300 mt-2">
              <strong>Types de plâtre :</strong> plâtre à mouler (fin) / plâtre de construction (moins fin)
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">3.2 Prise du Plâtre</h4>
            <p className="text-slate-300 mb-4"><strong>Réaction de reprise d'eau (prise rapide) :</strong></p>
            <div className="formula-box">
              <p className="text-center text-lg">CaSO₄·0,5H₂O + eau → CaSO₄·2H₂O</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">3.3 Propriétés du Plâtre</h4>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Propriété</th>
                    <th>Valeur</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>ρ apparente</td><td>800 à 1300 kg/m³</td></tr>
                  <tr><td>Conductivité λ</td><td>0,3 à 0,5 W/m·K</td></tr>
                  <tr><td>Résistance en compression</td><td>≤ <strong className="text-primary-400">10 MPa</strong> à 28j (si bien gâché et sec)</td></tr>
                  <tr><td>Solubilité</td><td><strong className="text-red-400">Soluble dans l'eau</strong> → vulnérable à l'humidité</td></tr>
                  <tr><td>Comportement au feu</td><td><strong className="text-green-400">Incombustible</strong> → dégage uniquement vapeur d'eau → protection incendie</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">3.4 Utilisations du Plâtre</h4>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Produit</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong className="text-orange-400">Enduit de plâtre</strong></td><td>Plâtre + chaux grasse (10–15%) + sable → enduit murs et plafonds, projeté mécaniquement</td></tr>
                  <tr><td><strong className="text-orange-400">Carreaux de plâtre</strong></td><td>Éléments moulés pour cloisons intérieures</td></tr>
                  <tr><td><strong className="text-orange-400">Plaques de plâtre</strong></td><td>Pour cloisons et faux-plafonds, sur ossature métallique</td></tr>
                  <tr><td><strong className="text-orange-400">Staff</strong></td><td>Plâtre + fibres végétales (filasse de chanvre) → éléments décoratifs (colonnes, corniches, rosaces)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
