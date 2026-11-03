import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProblemSection from './components/ProblemSection.jsx'

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <ProblemSection />
        {/*
          ÁLVARO añadirá sus componentes DEBAJO de ProblemSection:
          <SolutionSection />
          <BenefitsSection />
          <VideoSection />
          <CTASection />
          La estructura y estilos de Unai no necesitan modificarse.
        */}
      </main>
    </>
  )
}

export default App
