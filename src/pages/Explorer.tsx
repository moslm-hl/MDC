import { useState } from 'react'
import { Search, BookOpen, Filter, Copy } from 'lucide-react'

export function Explorer() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedChapter, setSelectedChapter] = useState('all')

  const formulas = [
    {
      id: 1,
      chapter: 'Chapitre 1',
      title: 'Masse volumique apparente',
      formula: 'ρapp = Ms / Vt',
      description: 'Masse par unité de volume total (vides inclus)',
      variables: [
        { symbol: 'ρapp', meaning: 'Masse volumique apparente (kg/m³)' },
        { symbol: 'Ms', meaning: 'Masse du matériau sec (kg)' },
        { symbol: 'Vt', meaning: 'Volume total (m³)' },
      ],
    },
    {
      id: 2,
      chapter: 'Chapitre 1',
      title: 'Masse volumique absolue',
      formula: 'ρs = Ms / Vs',
      description: 'Masse par unité de volume de matière sans les vides',
      variables: [
        { symbol: 'ρs', meaning: 'Masse volumique absolue (kg/m³)' },
        { symbol: 'Ms', meaning: 'Masse du matériau sec (kg)' },
        { symbol: 'Vs', meaning: 'Volume de la matière solide (m³)' },
      ],
    },
    {
      id: 3,
      chapter: 'Chapitre 1',
      title: 'Densité',
      formula: 'd = ρ / ρeau',
      description: 'Rapport de la masse volumique du matériau sur celle de l\'eau',
      variables: [
        { symbol: 'd', meaning: 'Densité (sans unité)' },
        { symbol: 'ρ', meaning: 'Masse volumique du matériau (kg/m³)' },
        { symbol: 'ρeau', meaning: 'Masse volumique de l\'eau = 1000 kg/m³' },
      ],
    },
    {
      id: 4,
      chapter: 'Chapitre 1',
      title: 'Porosité',
      formula: 'p = (Vv / Vt) × 100',
      description: 'Volume des vides par unité de volume total',
      variables: [
        { symbol: 'p', meaning: 'Porosité (%)' },
        { symbol: 'Vv', meaning: 'Volume des pores (m³)' },
        { symbol: 'Vt', meaning: 'Volume total (m³)' },
      ],
    },
    {
      id: 5,
      chapter: 'Chapitre 1',
      title: 'Compacité',
      formula: 'c = (Vs / Vt) × 100',
      description: 'Volume de la matière solide par unité de volume total',
      variables: [
        { symbol: 'c', meaning: 'Compacité (%)' },
        { symbol: 'Vs', meaning: 'Volume de la matière solide (m³)' },
        { symbol: 'Vt', meaning: 'Volume total (m³)' },
      ],
    },
    {
      id: 6,
      chapter: 'Chapitre 1',
      title: 'Teneur en eau',
      formula: 'W = ((Gh - Gs) / Gs) × 100',
      description: 'Pourcentage d\'humidité du matériau à l\'état naturel',
      variables: [
        { symbol: 'W', meaning: 'Teneur en eau (%)' },
        { symbol: 'Gh', meaning: 'Masse humide (kg)' },
        { symbol: 'Gs', meaning: 'Masse sèche (kg)' },
      ],
    },
    {
      id: 7,
      chapter: 'Chapitre 1',
      title: 'Absorption',
      formula: 'Ab = ((Ma - Ms) / Ms) × 100',
      description: 'Capacité d\'un matériau à absorber l\'eau',
      variables: [
        { symbol: 'Ab', meaning: 'Absorption (%)' },
        { symbol: 'Ma', meaning: 'Masse après immersion (kg)' },
        { symbol: 'Ms', meaning: 'Masse sèche (kg)' },
      ],
    },
    {
      id: 8,
      chapter: 'Chapitre 2',
      title: 'Module de finesse',
      formula: 'Mf = Σ(refus cumulés %) / 100',
      description: 'Caractéristique de la granulométrie des sables',
      variables: [
        { symbol: 'Mf', meaning: 'Module de finesse' },
        { symbol: 'Σ', meaning: 'Somme des refus sur tamis 0.125-0.25-0.5-1-2-4 mm' },
      ],
    },
    {
      id: 9,
      chapter: 'Chapitre 2',
      title: 'Équivalent de sable',
      formula: 'ES = (h2 / h1) × 100',
      description: 'Test de propreté des sables',
      variables: [
        { symbol: 'ES', meaning: 'Équivalent de sable (%)' },
        { symbol: 'h1', meaning: 'Hauteur totale (fines + sable)' },
        { symbol: 'h2', meaning: 'Hauteur du sable propre' },
      ],
    },
    {
      id: 10,
      chapter: 'Chapitre 2',
      title: 'Los Angeles',
      formula: 'LA = (m / M) × 100',
      description: 'Résistance à la fragmentation par chocs',
      variables: [
        { symbol: 'LA', meaning: 'Coefficient Los Angeles (%)' },
        { symbol: 'm', meaning: 'Masse des éléments < 1.6 mm (g)' },
        { symbol: 'M', meaning: 'Masse totale de l\'échantillon (g)' },
      ],
    },
    {
      id: 11,
      chapter: 'Chapitre 2',
      title: 'Micro-Deval',
      formula: 'MDE = (m / M) × 100',
      description: 'Résistance à l\'usure par frottement',
      variables: [
        { symbol: 'MDE', meaning: 'Coefficient Micro-Deval (%)' },
        { symbol: 'm', meaning: 'Masse des éléments < 1.6 mm (g)' },
        { symbol: 'M', meaning: 'Masse totale de l\'échantillon (g)' },
      ],
    },
    {
      id: 12,
      chapter: 'Chapitre 4',
      title: 'Rapport E/C',
      formula: 'E/C = E / C',
      description: 'Rapport eau sur ciment',
      variables: [
        { symbol: 'E/C', meaning: 'Rapport eau/ciment' },
        { symbol: 'E', meaning: 'Masse d\'eau (kg)' },
        { symbol: 'C', meaning: 'Masse de ciment (kg)' },
      ],
    },
    {
      id: 13,
      chapter: 'Chapitre 4',
      title: 'Formule de Feret',
      formula: 'fc28 = k × fc × (Vc/(Vc+Ve))²',
      description: 'Estimation de la résistance du béton',
      variables: [
        { symbol: 'fc28', meaning: 'Résistance à 28 jours (MPa)' },
        { symbol: 'k', meaning: 'Coefficient (≈ 4.9)' },
        { symbol: 'fc', meaning: 'Classe de résistance du ciment (MPa)' },
        { symbol: 'Vc', meaning: 'Volume de ciment (m³)' },
        { symbol: 'Ve', meaning: 'Volume d\'eau (m³)' },
      ],
    },
    {
      id: 14,
      chapter: 'Chapitre 4',
      title: 'Résistance à la compression',
      formula: 'fc = Fmax / A',
      description: 'Contrainte maximale avant rupture',
      variables: [
        { symbol: 'fc', meaning: 'Résistance (MPa)' },
        { symbol: 'Fmax', meaning: 'Charge maximale (N)' },
        { symbol: 'A', meaning: 'Section de l\'éprouvette (mm²)' },
      ],
    },
  ]

  const chapters = ['all', 'Chapitre 1', 'Chapitre 2', 'Chapitre 3', 'Chapitre 4']

  const filteredFormulas = formulas.filter((formula) => {
    const matchesSearch = formula.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         formula.formula.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesChapter = selectedChapter === 'all' || formula.chapter === selectedChapter
    return matchesSearch && matchesChapter
  })

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="pt-20 space-y-6">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-4xl font-bold gradient-text">Explorateur de Formules</h1>
        <p className="text-slate-400">Base de données complète des formules et propriétés</p>
      </div>

      <div className="glass-card p-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher une formule..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="simulation-input pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-slate-400" />
            <select
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(e.target.value)}
              className="simulation-input"
            >
              {chapters.map((chapter) => (
                <option key={chapter} value={chapter}>
                  {chapter === 'all' ? 'Tous les chapitres' : chapter}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredFormulas.map((formula) => (
          <div key={formula.id} className="section-card">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <span className="text-xs text-primary-400 font-medium">{formula.chapter}</span>
                <h3 className="text-lg font-bold text-slate-100 mt-1">{formula.title}</h3>
              </div>
              <button
                onClick={() => copyToClipboard(formula.formula)}
                className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
                title="Copier la formule"
              >
                <Copy className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            <div className="formula-box mb-4">
              <p className="text-center text-lg font-mono">{formula.formula}</p>
            </div>

            <p className="text-sm text-slate-400 mb-4">{formula.description}</p>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-300">Variables :</p>
              {formula.variables.map((variable, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <span className="font-mono text-accent-400">{variable.symbol}</span>
                  <span className="text-slate-400">= {variable.meaning}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredFormulas.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <p className="text-slate-400">Aucune formule trouvée</p>
        </div>
      )}
    </div>
  )
}
