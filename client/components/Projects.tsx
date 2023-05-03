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
        <h3>Lost and Found</h3>
        <p>
          A &quot;billboard&quot; style website for people to post about their
          animals that have gone missing, and for people who have found stray
          animals to post about them.
        </p>
        <Link to="/lostandfound">
          <a href="/lostandfound">Read more →</a>
        </Link>
      </div>
    </div>
  )
}

export default Projects
