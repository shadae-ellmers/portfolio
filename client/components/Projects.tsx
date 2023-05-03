import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className="projects">
      <div className="first-section">
        <h2>Here are some projects I&apos;ve completed →</h2>
      </div>
      <div className="section">
        <h3>PingPong</h3>
        <p>
          Send a notification to your friends when you want to spontaneously
          hang out - a simple pager app to kill your group chat and connect in
          person.
        </p>
        <Link to="/pingpong">
          <a href="/pingpong">Read more →</a>
        </Link>
      </div>
      <div className="section">
        <h3>Astrology</h3>
        <p>
          Interpret your natal birth chart and add your friends charts to
          compare.
        </p>
        <Link to="/astrology">
          <a href="/astrology">Read more →</a>
        </Link>
      </div>
      <div className="section">
        <h3>Book Tracker</h3>
        <p>
          A personal site for me to track the books I read and see the
          statistics of the reading over time.
        </p>
        <Link to="/booktracker">
          <a href="/booktracker">Read more →</a>
        </Link>
      </div>
    </div>
  )
}

export default Projects
