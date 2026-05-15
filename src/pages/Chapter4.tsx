import { useState, type ReactNode } from 'react'
import { ChevronDown, ChevronUp, Building2, Factory, Zap, Activity, Shield, Calculator } from 'lucide-react'

export function Chapter4() {
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
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-green-400" />
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
        <h1 className="text-4xl font-bold gradient-text">Chapitre 4 — Le Béton</h1>
        <p className="text-slate-400">Composition, fabrication, mise en œuvre et caractéristiques</p>
      </div>

      <Section id="intro" title="Introduction" icon={Building2}>
        <div className="space-y-4">
          <div className="bg-slate-800/50 border-l-4 border-green-500 p-4 rounded-r-lg">
            <p className="text-slate-300">
              Le <strong className="text-green-400">béton</strong> est le matériau de construction le plus utilisé au monde. C'est un matériau <strong className="text-primary-400">composite</strong> formé de granulats, de ciment et d'eau, associé à l'acier → <strong className="text-primary-400">béton armé</strong>.
            </p>
          </div>
          <p className="text-slate-300"><strong>Avantages :</strong></p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
            <li>Facile à fabriquer, peu d'entretien</li>
            <li>Ressources disponibles en grandes quantités</li>
            <li>Longue durabilité si bien mis en œuvre</li>
            <li>Bonne résistance au feu et aux actions mécaniques</li>
          </ul>
        </div>
      </Section>

      <Section id="composition" title="Composition du Béton" icon={Activity}>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">Proportions volumiques</h4>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Constituant</th>
                    <th>% du volume total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Granulats (squelette granulaire)</td><td><strong className="text-green-400">60 à 75%</strong></td></tr>
                  <tr><td>Pâte de ciment (ciment + eau + air)</td><td><strong className="text-green-400">25 à 40%</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">1.1 Eau de Gâchage</h4>
            <p className="text-slate-300 mb-2"><strong>Rôles :</strong></p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Hydrater le ciment</li>
              <li>Mouiller les granulats</li>
              <li>Faciliter la mise en œuvre</li>
            </ul>
            <p className="text-slate-300 mt-4"><strong>Qualité requise :</strong> propre, sans impuretés nocives, sans sels dissous en forte concentration (chlorures, sulfates, matières organiques…)</p>
            <div className="bg-slate-800/50 border-l-4 border-red-500 p-4 rounded-r-lg mt-4">
              <p className="text-slate-300">
                <strong className="text-red-400">L'eau de mer est interdite</strong> (≈ 30 g/L de chlorure de sodium → risque de corrosion des armatures).
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">1.2 Adjuvants</h4>
            <p className="text-slate-300 mb-4">
              Produits chimiques incorporés en <strong className="text-primary-400">faibles quantities (&lt; 5% du poids de ciment)</strong> pour améliorer certaines propriétés.
            </p>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Adjuvant</th>
                    <th>Rôle</th>
                    <th>Utilisation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong className="text-green-400">Plastifiants / superplastifiants</strong></td><td>Fluidifie le béton par déflocculation des grains de ciment ; permet de réduire l'eau à maniabilité égale</td><td>BHP, bétons difficiles à mettre en œuvre</td></tr>
                  <tr><td><strong className="text-green-400">Retardateurs de prise</strong></td><td>Prolongent la durée de vie du béton frais</td><td>Transport longue distance, temps chaud</td></tr>
                  <tr><td><strong className="text-green-400">Accélérateurs de prise</strong></td><td>Diminuent les temps de début et fin de prise</td><td>Travaux par temps froid</td></tr>
                  <tr><td><strong className="text-green-400">Accélérateurs de durcissement</strong></td><td>Augmentent les résistances initiales</td><td>Décoffrage rapide, préfabrication</td></tr>
                  <tr><td><strong className="text-green-400">Entraîneurs d'air</strong></td><td>Forment des micro-bulles d'air, améliorent la résistance au gel</td><td>Travaux en région froide</td></tr>
                  <tr><td><strong className="text-green-400">Hydrofuges de masse</strong></td><td>Réduisent la perméabilité</td><td>Piscines, réservoirs, fondations, caves</td></tr>
                  <tr><td><strong className="text-green-400">Rétenteurs d'eau</strong></td><td>Régulent l'évaporation, réduisent le ressuage et le retrait</td><td>Bétons exposés, temps chaud</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      <Section id="fabrication" title="Fabrication du Béton" icon={Factory}>
        <div className="space-y-4">
          <p className="text-slate-300">
            <strong>Procédé :</strong> malaxage des constituants pour obtenir un mélange <strong className="text-primary-400">homogène</strong> (gâchée)
          </p>
          <p className="text-slate-300 mb-2"><strong>Matériels :</strong></p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
            <li><strong className="text-accent-400">Bétonnière</strong> : petites quantités, chantiers courants</li>
            <li><strong className="text-accent-400">Malaxeur</strong> : plus performant, mélange forcé</li>
            <li><strong className="text-accent-400">Centrale à béton (BPE)</strong> : production en grande quantité, livraison par <strong className="text-primary-400">camion malaxeur (toupie)</strong></li>
          </ul>
          <p className="text-slate-300 mt-4">
            Une centrale à béton comprend : silos à ciment, aires de stockage granulats, cuves pour eau et adjuvants.
          </p>
          <div className="bg-slate-800/50 border-l-4 border-green-500 p-4 rounded-r-lg mt-4">
            <p className="text-slate-300">
              La durée du malaxage conditionne directement la <strong className="text-green-400">qualité et l'homogénéité</strong> du béton.
            </p>
          </div>
        </div>
      </Section>

      <Section id="mise_oeuvre" title="Mise en Œuvre du Béton" icon={Zap}>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">3.1 Mise en Place</h4>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Le béton est coulé dans un <strong className="text-primary-400">coffrage</strong> (moule à béton en bois ou acier)</li>
              <li>Il doit remplir entièrement le coffrage pour une <strong className="text-primary-400">compacité maximale</strong></li>
            </ul>
            <p className="text-slate-300 mt-4 font-bold"><strong>Vibration :</strong> technique la plus courante :</p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Fait remonter les bulles d'air en surface</li>
              <li>Facilite le tassement dans le coffrage</li>
              <li>Favorise l'arrangement des granulats autour des armatures (enrobage)</li>
              <li><strong className="text-accent-400">Aiguille vibrante</strong> (interne) ou <strong className="text-accent-400">règle vibrante</strong> (superficielle, épaisseur &lt; 25 cm)</li>
            </ul>
            <div className="bg-slate-800/50 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
              <p className="text-slate-300">
                ⚠️ Vibration trop courte → béton insuffisamment serré | Trop longue → <strong className="text-red-400">ségrégation</strong> des constituants
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">3.2 Surfaçage</h4>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Ferme la surface → augmente la compacité de la partie supérieure</li>
              <li>Donne un fini <strong className="text-primary-400">lisse et plan</strong></li>
              <li>Réalisé par <strong className="text-accent-400">talochage</strong> (manuel ou mécanisé) ou <strong className="text-accent-400">lisseuses mécaniques</strong></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">3.3 Cure du Béton</h4>
            <div className="bg-slate-800/50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
              <p className="text-slate-300">
                La cure est l'ensemble des procédés pour <strong className="text-green-400">maintenir l'humidité</strong> nécessaire à l'hydratation du ciment après la mise en place.
              </p>
            </div>
            <p className="text-slate-300 mb-2"><strong>Importance :</strong> sans cure adéquate :</p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>L'hydratation du ciment ne se complète pas → résistance réduite</li>
              <li>Retrait augmenté → <strong className="text-red-400">fissures superficielles</strong></li>
            </ul>
            <p className="text-slate-300 mt-4 mb-2"><strong>Procédés de cure :</strong></p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Bâches étanches (film plastique)</li>
              <li>Produit de cure (pellicule de protection par pulvérisation)</li>
              <li>Pulvérisation fréquente d'eau</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="caracteristiques" title="Caractéristiques du Béton" icon={Shield}>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">4.1 Béton Frais : Ouvrabilité</h4>
            <div className="bg-slate-800/50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
              <p className="text-slate-300">
                L'<strong className="text-green-400">ouvrabilité</strong> (ou maniabilité) = capacité du béton à être mis en œuvre facilement (remplissage des coffrages, enrobage des armatures).
              </p>
            </div>
            <p className="text-slate-300 mb-2"><strong>Mesure :</strong> <strong className="text-primary-400">Essai d'affaissement au cône d'Abrams (Slump Test)</strong></p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Hauteur d'affaissement après démoulage du cône</li>
              <li>Plus l'affaissement est grand → béton plus fluide</li>
            </ul>
            <p className="text-slate-300 mt-4 mb-2"><strong>5 classes de consistance selon la norme européenne :</strong></p>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Classe</th>
                    <th>Affaissement (mm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>S1</td><td>10 à 40</td></tr>
                  <tr><td>S2</td><td>50 à 90</td></tr>
                  <tr><td>S3</td><td>100 à 150</td></tr>
                  <tr><td>S4</td><td>160 à 210</td></tr>
                  <tr><td>S5</td><td>≥ 220</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-300 mt-4 mb-2"><strong>Facteurs influençant l'ouvrabilité :</strong></p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Nature et dosage en ciment</li>
              <li>Forme et granulométrie des granulats</li>
              <li>Adjuvants</li>
              <li><strong className="text-primary-400">Dosage en eau</strong> (facteur principal)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-3">4.2 Béton Durci</h4>
            
            <div className="space-y-4">
              <div>
                <p className="text-slate-300 font-bold mb-2">Résistance à la Compression</p>
                <div className="bg-slate-800/50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
                  <p className="text-slate-300">
                    Caractéristique <strong className="text-green-400">essentielle</strong> du béton durci. Mesurée à <strong className="text-primary-400">28 jours</strong> sur éprouvette cylindrique (ø 15 cm × h 30 cm ou ancienne norme 16×32 cm).
                  </p>
                </div>
                <p className="text-slate-300 mb-2"><strong>Classes de résistance (norme européenne) :</strong></p>
                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Classe</th>
                        <th>fc28 cylindre (MPa)</th>
                        <th>fc28 cube (MPa)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>C12/15</td><td>12</td><td>15</td></tr>
                      <tr><td>C16/20</td><td>16</td><td>20</td></tr>
                      <tr><td>C20/25</td><td>20</td><td>25</td></tr>
                      <tr><td>C25/30</td><td>25</td><td>30</td></tr>
                      <tr><td>C30/37</td><td>30</td><td>37</td></tr>
                      <tr><td>C35/45</td><td>35</td><td>45</td></tr>
                      <tr><td>C45/55</td><td>45</td><td>55</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-slate-300 mt-4 mb-2"><strong>Ordres de grandeur :</strong></p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Bétons courants : <strong className="text-primary-400">20 à 30 MPa</strong></li>
                  <li>Bétons de qualité supérieure : <strong className="text-primary-400">40 à 50 MPa</strong></li>
                  <li>Bétons à haute performance (BHP) : <strong className="text-primary-400">&gt; 100 MPa</strong></li>
                </ul>
                <p className="text-slate-300 mt-4 mb-2"><strong>Facteurs influençant la résistance à la compression :</strong></p>
                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Facteur</th>
                        <th>Effet</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>↑ Dosage en ciment</td><td>↑ Résistance</td></tr>
                      <tr><td>↑ Classe de résistance du ciment</td><td>↑ Résistance</td></tr>
                      <tr><td>↑ Finesse du ciment</td><td>↑ Résistance</td></tr>
                      <tr><td>↑ Rapport E/C (eau/ciment)</td><td><strong className="text-red-400">↓ Résistance</strong></td></tr>
                      <tr><td>Granulats (forme, granulométrie, propreté, résistance, G/S)</td><td>Impact direct</td></tr>
                      <tr><td>Malaxage insuffisant</td><td>↓ Résistance (manque d'homogénéité)</td></tr>
                      <tr><td>Vibration insuffisante</td><td>↓ Résistance (manque de compacité)</td></tr>
                      <tr><td>Cure inadéquate</td><td>↓ Résistance + fissuration précoce</td></tr>
                      <tr><td>Temps (âge du béton)</td><td>↑ Résistance avec le temps</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <p className="text-slate-300 font-bold mb-2">Résistance à la Traction</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Environ <strong className="text-primary-400">1/10 de la résistance à la compression</strong> (fc/10)</li>
                  <li>Déterminée par :
                    <ul className="ml-4 mt-2 space-y-1">
                      <li><strong className="text-accent-400">Essai de flexion 3 points</strong> : charge unique au milieu</li>
                      <li><strong className="text-accent-400">Essai de flexion 4 points</strong> : deux charges symétriques aux tiers de la portée</li>
                      <li><strong className="text-accent-400">Essai de fendage (Brésilien)</strong> : cylindre 16×32 cm disposé horizontalement</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-slate-300 font-bold mb-2">Masse Volumique</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Béton non armé : <strong className="text-primary-400">2300 à 2400 kg/m³</strong></li>
                  <li>Béton armé : <strong className="text-primary-400">≈ 2500 kg/m³</strong></li>
                </ul>
              </div>

              <div>
                <p className="text-slate-300 font-bold mb-2">Retrait</p>
                <p className="text-slate-300 mb-2">Raccourcissement d'un élément en béton, <strong className="text-primary-400">indépendant des charges</strong> :</p>
                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Type de retrait</th>
                        <th>Cause</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td><strong className="text-green-400">Plastique</strong></td><td>Avant prise, béton encore mou → fissures</td></tr>
                      <tr><td><strong className="text-green-400">Thermique</strong></td><td>Refroidissement du béton après la prise</td></tr>
                      <tr><td><strong className="text-green-400">Hydraulique (endogène)</strong></td><td>Consommation d'eau lors de l'hydratation</td></tr>
                      <tr><td><strong className="text-green-400">De séchage</strong></td><td>Évaporation de l'eau pendant le durcissement</td></tr>
                    </tbody>
                  </table>
                </div>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mt-4">
                  <li>Valeurs typiques : <strong className="text-primary-400">0,1 à 1 mm/m</strong></li>
                  <li>Principale conséquence : <strong className="text-red-400">fissuration du béton</strong></li>
                </ul>
              </div>

              <div>
                <p className="text-slate-300 font-bold mb-2">Fluage</p>
                <div className="bg-slate-800/50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
                  <p className="text-slate-300">
                    Déformation <strong className="text-green-400">différée</strong> du béton sous l'effet de charges constantes ou variables, en plus de la déformation instantanée.
                  </p>
                </div>
                <p className="text-slate-300 mb-2"><strong>Facteurs d'influence :</strong></p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Caractéristiques du béton, âge au moment du chargement</li>
                  <li>Épaisseur de l'élément, hygrométrie (température + humidité)</li>
                  <li>Intensité de la contrainte imposée, temps</li>
                </ul>
                <p className="text-slate-300 mt-4 mb-2"><strong>Conséquences :</strong></p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Déformations excessives dans les éléments structuraux (poutres)</li>
                  <li>En <strong className="text-primary-400">béton précontraint</strong> : pertes de contrainte (indésirables)</li>
                </ul>
                <div className="bg-slate-800/50 border-l-4 border-accent-500 p-4 rounded-r-lg mt-4">
                  <p className="text-slate-300">
                    Pour les bétons courants : déformation différée ≈ <strong className="text-accent-400">2 fois</strong> la déformation instantanée.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-slate-300 font-bold mb-2">Durabilité</p>
                <div className="bg-slate-800/50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
                  <p className="text-slate-300">
                    Capacité de l'ouvrage à conserver sa fonction dans le temps malgré les agressions environnementales.
                  </p>
                </div>
                <p className="text-slate-300 mb-2"><strong>Phénomènes nuisant à la durabilité :</strong></p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li><strong className="text-red-400">Carbonatation</strong> (action du CO₂) → dépassivation des armatures → corrosion</li>
                  <li><strong className="text-red-400">Chlorures</strong> → corrosion des armatures</li>
                  <li><strong className="text-red-400">Eau de mer</strong></li>
                  <li><strong className="text-red-400">Alcali-réaction</strong> (gonflement interne)</li>
                  <li><strong className="text-red-400">Gel/dégel</strong></li>
                  <li><strong className="text-red-400">Lixiviation</strong> (lessivage des hydrates par milieux acides)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="formulation" title="Formulation du Béton" icon={Calculator}>
        <div className="space-y-4">
          <div className="bg-slate-800/50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
            <p className="text-slate-300">
              Déterminer la <strong className="text-green-400">composition précise</strong> (dosages des constituants) selon des critères techniques, normatifs et économiques.
            </p>
          </div>
          <p className="text-slate-300 mb-2"><strong>Paramètres à prendre en compte :</strong></p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
            <li>Caractéristiques géométriques de l'ouvrage et son environnement</li>
            <li>Propriétés requises du béton frais et durci</li>
            <li>Conditions de production et de mise en œuvre</li>
            <li>Matériaux disponibles localement</li>
          </ul>
          <div className="bg-slate-800/50 border-l-4 border-accent-500 p-4 rounded-r-lg mt-4">
            <p className="text-slate-300">
              <strong className="text-accent-400">Méthode utilisée en TP :</strong> méthode <strong className="text-primary-400">Dreux/Gorisse</strong>
            </p>
          </div>
        </div>
      </Section>

      <Section id="exposition" title="Classes d'Exposition du Béton" icon={Shield}>
        <div className="space-y-4">
          <div className="bg-slate-800/50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
            <p className="text-slate-300">
              Traduisent les <strong className="text-green-400">actions environnementales</strong> (physiques et chimiques) auxquelles le béton sera exposé pendant toute sa durée d'utilisation.
            </p>
          </div>
          <p className="text-slate-300 mb-2">
            <strong>Norme NF EN 206/CN (conforme à l'Eurocode 2) → 18 classes d'exposition :</strong>
          </p>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Type d'agression</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong className="text-green-400">XC</strong></td><td>Corrosion par carbonatation</td></tr>
                <tr><td><strong className="text-green-400">XD</strong></td><td>Corrosion par chlorures (hors eau de mer)</td></tr>
                <tr><td><strong className="text-green-400">XS</strong></td><td>Corrosion par chlorures de l'eau de mer</td></tr>
                <tr><td><strong className="text-green-400">XF</strong></td><td>Attaque par le gel/dégel</td></tr>
                <tr><td><strong className="text-green-400">XA</strong></td><td>Attaque chimique (sols, eaux agressives)</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-slate-800/50 border-l-4 border-accent-500 p-4 rounded-r-lg mt-4">
            <p className="text-slate-300">
              La détermination des classes d'exposition permet de choisir : le <strong className="text-accent-400">dosage en ciment</strong>, le <strong className="text-accent-400">type de ciment</strong>, et l'<strong className="text-accent-400">enrobage des armatures</strong>.
            </p>
          </div>
        </div>
      </Section>

      <Section id="qualite" title="Contrôle de Qualité du Béton" icon={Activity}>
        <div className="space-y-4">
          <p className="text-slate-300">
            Le béton doit satisfaire les spécifications du <strong className="text-primary-400">cahier des charges</strong>.
          </p>
          <p className="text-slate-300 mb-2"><strong>Plan de contrôle en production courante :</strong></p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
            <li>Contrôle des <strong className="text-accent-400">matériaux constituants</strong></li>
            <li>Contrôle du <strong className="text-accent-400">matériel de fabrication</strong></li>
            <li>Contrôle des <strong className="text-accent-400">procédures de production</strong></li>
            <li>Contrôle des <strong className="text-accent-400">propriétés du béton</strong> (frais et durci)</li>
          </ul>
        </div>
      </Section>
    </div>
  )
}
