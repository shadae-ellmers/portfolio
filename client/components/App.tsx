import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'

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
        </Routes>
      </section>
    </>
  )
}

export default App
