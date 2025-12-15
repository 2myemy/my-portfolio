import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <main className="bg-warm text-main font-sans">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact/>
    </main>
  )
}


export default App