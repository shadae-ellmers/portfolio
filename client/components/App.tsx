import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Projects from './Projects'
import Pingpong from './Pingpong'
import About from './About'
import Astrology from './Astrology'
import LostAndFound from './LostAndFound'

function App() {
  return (
    <>
      <header className="header">
        <h1>Shadae Ellmers</h1>
        <Nav />
      </header>
      <section className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pingpong" element={<Pingpong />} />
          <Route path="/astrology" element={<Astrology />} />
          <Route path="/lostandfound" element={<LostAndFound />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </section>
    </>
  )
}

export default App
