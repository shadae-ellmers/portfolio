import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h2>Hello 👋</h2>
      <p>
        I&apos;m Shadae, a junior software developer based in Pōneke, Aoteroa.
      </p>
      <div>
        <Link to="/projects">Projects →</Link>
      </div>
      <div>
        <Link to="/about">About →</Link>
      </div>
      <div>
        <Link to="/contact">Contact →</Link>
      </div>
    </>
  )
}

export default Home
