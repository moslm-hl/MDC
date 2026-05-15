import { useState } from 'react'
import { GraduationCap, CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react'

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const questions = [
    {
      id: 1,
      chapter: 'Chapitre 1',
      question: 'Quelle est la formule de la masse volumique apparente ?',
      options: [
        'ρapp = Ms / Vt',
        'ρapp = Vt / Ms',
        'ρapp = Ms / Vs',
        'ρapp = Vs / Ms',
      ],
      correct: 0,
      explanation: 'La masse volumique apparente est la masse par unité de volume total (vides inclus)',
    },
    {
      id: 2,
      chapter: 'Chapitre 1',
      question: 'Quelle est la relation fondamentale entre porosité et compacité ?',
      options: [
        'p - c = 100%',
        'p + c = 100%',
        'p × c = 100%',
        'p / c = 100%',
      ],
      correct: 1,
      explanation: 'La somme de la porosité et de la compacité est toujours égale à 100%',
    },
    {
      id: 3,
      chapter: 'Chapitre 1',
      question: 'Quel matériau a la conductivité thermique la plus faible ?',
      options: [
        'Acier doux',
        'Béton ordinaire',
        'Polystyrène expansé',
        'Marbre',
      ],
      correct: 2,
      explanation: 'Le polystyrène expansé a une conductivité de 0.03 W·m⁻¹·K⁻¹, ce qui en fait un excellent isolant',
    },
    {
      id: 4,
      chapter: 'Chapitre 2',
      question: 'Quelle est la plage optimale du module de finesse pour un sable ?',
      options: [
        '1.8 à 2.2',
        '2.2 à 2.8',
        '2.8 à 3.3',
        '3.3 à 4.0',
      ],
      correct: 1,
      explanation: 'Un module de finesse entre 2.2 et 2.8 correspond à un sable optimal offrant un bon compromis résistance/ouvrabilité',
    },
    {
      id: 5,
      chapter: 'Chapitre 2',
      question: 'Que signifie l\'essai Los Angeles ?',
      options: [
        'Résistance à l\'usure',
        'Résistance à la fragmentation par chocs',
        'Propreté des sables',
        'Forme des grains',
      ],
      correct: 1,
      explanation: 'L\'essai Los Angeles évalue la résistance des granulats à la fragmentation par chocs',
    },
    {
      id: 6,
      chapter: 'Chapitre 3',
      question: 'Quels sont les deux principaux constituants du clinker ?',
      options: [
        'Calcaire et argile',
        'Silice et alumine',
        'C3S et C2S',
        'C3A et C4AF',
      ],
      correct: 2,
      explanation: 'Le clinker doit contenir au moins 2/3 de silicates de calcium (C3S + C2S)',
    },
    {
      id: 7,
      chapter: 'Chapitre 3',
      question: 'Quel type de liant durcit en milieu humide et est insoluble dans l\'eau ?',
      options: [
        'Liant aérien',
        'Liant hydraulique',
        'Plâtre',
        'Chaux aérienne',
      ],
      correct: 1,
      explanation: 'Les liants hydrauliques durcissent en milieu humide et sont insolubles dans l\'eau (ex: ciments, chaux hydraulique)',
    },
    {
      id: 8,
      chapter: 'Chapitre 4',
      question: 'Quel est le rapport E/C optimal pour un béton de qualité ?',
      options: [
        '0.9 - 1.0',
        '0.7 - 0.8',
        '0.4 - 0.6',
        '0.2 - 0.3',
      ],
      correct: 2,
      explanation: 'Un rapport E/C entre 0.4 et 0.6 est généralement optimal pour un bon compromis entre résistance et ouvrabilité',
    },
    {
      id: 9,
      chapter: 'Chapitre 4',
      question: 'Quelle est la résistance à la traction approximative par rapport à la résistance à la compression ?',
      options: [
        '1/2 de la compression',
        '1/10 de la compression',
        'Égale à la compression',
        '2 fois la compression',
      ],
      correct: 1,
      explanation: 'La résistance à la traction du béton est environ 1/10 de sa résistance à la compression',
    },
    {
      id: 10,
      chapter: 'Chapitre 4',
      question: 'Qu\'est-ce que le fluage du béton ?',
      options: [
        'Déformation instantanée sous charge',
        'Déformation différée sous charge constante',
        'Fissuration due au gel',
        'Diminution du volume par séchage',
      ],
      correct: 1,
      explanation: 'Le fluage est une déformation différée du béton sous l\'effet de charges constantes, en plus de la déformation instantanée',
    },
  ]

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
    setShowResult(true)

    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleResetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizCompleted(false)
  }

  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (quizCompleted) {
    return (
      <div className="pt-20 space-y-6">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl font-bold gradient-text">Quiz Terminé !</h1>
          <p className="text-slate-400">Voici vos résultats</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="section-card text-center space-y-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>
            
            <div>
              <p className="text-6xl font-bold gradient-text">{score} / {questions.length}</p>
              <p className="text-slate-400 mt-2">Questions correctes</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-2xl font-bold text-primary-400">
                {((score / questions.length) * 100).toFixed(0)}%
              </p>
              <p className="text-sm text-slate-400">Score final</p>
            </div>

            <div className="space-y-2">
              {score >= 8 && (
                <p className="text-green-400 font-semibold">🎉 Excellent ! Vous maîtrisez bien le sujet !</p>
              )}
              {score >= 5 && score < 8 && (
                <p className="text-yellow-400 font-semibold">👍 Bon travail ! Continuez à réviser !</p>
              )}
              {score < 5 && (
                <p className="text-orange-400 font-semibold">📚 Continuez à étudier les chapitres !</p>
              )}
            </div>

            <button
              onClick={handleResetQuiz}
              className="simulation-button inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Recommencer le quiz
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 space-y-6">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-4xl font-bold gradient-text">Quiz d'Évaluation</h1>
        <p className="text-slate-400">Testez vos connaissances sur les matériaux de construction</p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>Question {currentQuestion + 1} / {questions.length}</span>
            <span>{progress.toFixed(0)}%</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="section-card">
          <div className="mb-4">
            <span className="text-xs text-primary-400 font-medium">{currentQ.chapter}</span>
            <h2 className="text-xl font-bold text-slate-100 mt-2">{currentQ.question}</h2>
          </div>

          <div className="space-y-3">
            {currentQ.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = currentQ.correct === index
              const showCorrect = showResult && isCorrect
              const showIncorrect = showResult && isSelected && !isCorrect

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    showCorrect
                      ? 'bg-green-500/20 border-green-500 text-green-400'
                      : showIncorrect
                      ? 'bg-red-500/20 border-red-500 text-red-400'
                      : isSelected
                      ? 'bg-primary-500/20 border-primary-500 text-primary-400'
                      : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold">
                      {showCorrect ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : showIncorrect ? (
                        <XCircle className="w-5 h-5" />
                      ) : (
                        String.fromCharCode(65 + index)
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {showResult && (
            <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border-l-4 border-accent-500">
              <p className="text-slate-300">{currentQ.explanation}</p>
            </div>
          )}

          {showResult && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="simulation-button inline-flex items-center gap-2"
              >
                {currentQuestion < questions.length - 1 ? (
                  <>
                    Question suivante
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  'Voir les résultats'
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
