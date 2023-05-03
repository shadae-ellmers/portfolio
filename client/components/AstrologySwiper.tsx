import ReactDOM from 'react-dom'
import ReactSwipe from 'react-swipe'

function PingpongSwiper(reactSwipeEl: any) {
  return (
    <div className="swiper-container">
      <ReactSwipe
        className="swiper"
        swipeOptions={{ continuous: true }}
        ref={(el) => (reactSwipeEl = el)}
      >
        <div className="first-slide">
          <h3>Key tech features:</h3>
          <ul className="tech-list">
            <li>React</li>
            <li>TypeScript</li>
            <li>SQLite</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>Knex.js</li>
            <li>Redux</li>
            <li>Auth0</li>
          </ul>
          <h4 className="click-text">
            Click the arrows below to flow through the app.
          </h4>
        </div>
        <div className="one-slide">
          <p>
            This is the first page a user sees when they open the website. This
            page presents all the zodiac signs and their dates as a starting
            point.
          </p>
          <img
            className="slider-img"
            src="../../images/astrology/astro-home.png"
            alt="home page"
          />
        </div>
        <div className="one-slide">
          <p>
            This page is where a registered user can add their chart to the
            site. The user is able to delete and update a chart if they added
            it.
          </p>
          <img
            className="slider-img"
            src="../../images/astrology/astro-charts.png"
            alt="ping page"
          />
        </div>
        <div className="one-slide">
          <p>
            This page gives information on astrology and how to understand your
            birth chart.
          </p>
          <img
            className="slider-img"
            src="../../images/astrology/astro-info.png"
            alt="ping active page"
          />
        </div>
        <div className="one-slide">
          <p>
            I made this website as I wanted to practise code using CRUD (create,
            read, update, delete) operations. It then become my website for
            practising new tech as I learnt through Dev Academy, such as user
            authorisation and Redux.
          </p>
          <p>
            Reflecting on this project, to improve I want to use authentication
            to have users only see the charts they have created. I also want to
            use the database to generate information based on the user&apos;s
            input for the chart.
          </p>
          <p>
            This project taught me how data can get complicated quickly, and
            provided me stepping stones for implementing new tech.
          </p>
        </div>
      </ReactSwipe>
      <div className="swipe-buttons">
        <button onClick={() => reactSwipeEl.prev()}>←</button>
        <button onClick={() => reactSwipeEl.next()}>→</button>
      </div>
    </div>
  )
}

ReactDOM.render(<PingpongSwiper />, document.getElementById('app'))
export default PingpongSwiper
