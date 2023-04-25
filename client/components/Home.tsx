import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <div className="text">
        <h2>Hello 👋</h2>
        <p>
          I&apos;m Shadae, a Full Stack Software Developer based in Pōneke,
          Aoteroa.
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
      </div>
      <img
        src="../../images/green-illustration.png"
        alt="avatar illustration"
      />
    </div>
  )
}

export default Home
