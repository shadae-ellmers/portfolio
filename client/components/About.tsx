import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="about">
      <div className="text-container">
        <h3>About Me</h3>
        <p>
          Kia ora, I&apos;m a full stack web developer based in Pōneke,
          Aotearoa. I&apos;ve always had a knack for creative hobbies, and after
          picking up coding courses online in my gap year, I discovered my love
          for coding. Since then I have attended Dev Academy, which further
          developed my tech skills and soft skills. As a wahine Māori, I am
          passionate about uplifting disadvantaged communities, and want to
          achieve this while creating artistic and accessible tech. I&apos;m
          constantly thinking of ways to improve others&apos; lives, and tech
          has provided the perfect outlet for this.
        </p>
      </div>
      <div className="img-container">
        <img src="../../images/me-presenting.jpg" alt="me presenting" />
      </div>
      <div className="links">
        <div className="link-box">
          <Link to="../../files/shadae-ellmers-cv.pdf" target="_blank">
            CV
          </Link>
        </div>
        <div className="link-box">
          <Link
            to="https://www.linkedin.com/in/shadae-ellmers/"
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
        <div className="link-box">
          <Link to="https://github.com/shadae-ellmers" target="_blank">
            GitHub
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
