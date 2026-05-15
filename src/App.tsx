import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Home } from './pages/Home'
import { Chapter1 } from './pages/Chapter1'
import { Chapter2 } from './pages/Chapter2'
import { Chapter3 } from './pages/Chapter3'
import { Chapter4 } from './pages/Chapter4'
import { Exercises } from './pages/Exercises'
import { Simulations } from './pages/Simulations'
import { Explorer } from './pages/Explorer'
import { Quiz } from './pages/Quiz'

function App() {
  return (
    <Router>
      <div className="app-shell min-h-screen relative bg-slate-950 text-slate-100 overflow-x-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute right-1/4 top-28 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute left-10 bottom-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute inset-x-1/4 bottom-0 h-2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl" />
        </div>

        <Navigation />

        <main className="relative z-10 pt-28 pb-16 px-4 md:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chapter1" element={<Chapter1 />} />
              <Route path="/chapter2" element={<Chapter2 />} />
              <Route path="/chapter3" element={<Chapter3 />} />
              <Route path="/chapter4" element={<Chapter4 />} />
              <Route path="/exercises" element={<Exercises />} />
              <Route path="/simulations" element={<Simulations />} />
              <Route path="/explorer" element={<Explorer />} />
              <Route path="/quiz" element={<Quiz />} />
            </Routes>
          </div>
        </main>

        <footer className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-16 pb-10">
          <div className="mx-auto max-w-md rounded-[2rem] border border-slate-700/60 bg-slate-900/75 px-6 py-5 text-center shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">© {new Date().getFullYear()} All Rights Reserved</p>
            <p className="mt-2 text-base font-semibold text-white">Moslem HLIMI</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
