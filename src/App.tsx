import { Hero } from './components/Hero'
import { AppScreenshot } from './components/AppScreenshot'
import { ValueProposition } from './components/ValueProposition'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <main>
        <Hero />
        <AppScreenshot />
        <ValueProposition />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
