import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className="projects">
      <div className="section-text">
        <h2>Here are some picks for projects I&apos;ve completed →</h2>
      </div>
      <div className="section">
        <img
          src="../../images/pingpong/pingpong-thumbnail.png"
          alt="placeholder"
        />
        <div className="section">
          <h3>PingPong</h3>
          <p>
            Send out a notification to all your friends when you want to
            spontaneously hang out - a simple pager app to kill your group chat
            and connect in person.
          </p>
          <Link to="/pingpong">
            <a href="/pingpong">Read more →</a>
          </Link>
        </div>
      </div>
      <div className="section">
        <img src="../../images/placeholder.jpeg" alt="placeholder" />
        <div className="section">
          <h3>Astrology</h3>
          <p>aaaaaa</p>
          <Link to="/astrology">
            <a href="/astrology">Read more →</a>
          </Link>
        </div>
      </div>
      <div className="section">
        <img src="../../images/placeholder.jpeg" alt="placeholder" />
        <div className="section">
          <h3>NotMD</h3>
          <p>aaaaaa</p>
          <Link to="/notmd">
            <a href="/notmd">Read more →</a>
          </Link>
        </div>
      </div>
      <div className="section">
        <img src="../../images/placeholder.jpeg" alt="placeholder" />
        <div className="section">
          <h3>Not So Lonely Christmas</h3>
          <p>aaaaaa</p>
          <Link to="/notlonelyxmas">
            <a href="/notlonelyxmas">Read more →</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
