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
          <p>
            A &quot;billboard&quot; style website for people to post about their
            animals that have gone missing, and for people who have found stray
            animals to post about them.
          </p>
          <p>Key tech features:</p>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>TypeScript</li>
            <li>SQLite</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>Knex.js</li>
            <li>Auth0</li>
            <li>Bulma (CSS framework)</li>
          </ul>
          <p>Click the arrows below to flow through the app.</p>
        </div>
        <div className="one-slide">
          <p>This is the home page users land on when entering the website.</p>
          <img
            className="slider-img"
            src="../../images/lostandfound/home-laf.png"
            alt="home page"
          />
        </div>
        <div className="one-slide">
          <p>
            Here, users are able to browse animals that have been found and are
            looking for their owners. If a user is registered, they are able to
            view the contact details added to the post.
          </p>
          <img
            className="slider-img"
            src="../../images/lostandfound/found-laf.png"
            alt="found animals page"
          />
        </div>
        <div className="one-slide">
          <p>
            Similarly to the found animals page, on this page users can view the
            animals that owners have lost.
          </p>
          <img
            className="slider-img"
            src="../../images/lostandfound/lost-laf.png"
            alt="lost animals page"
          />
        </div>
        <div className="one-slide">
          <p>
            Each list of animals can be sorted by animal type, such as dogs or
            cats.
          </p>
          <img
            className="slider-img"
            src="../../images/lostandfound/cat-laf.png"
            alt="cats page"
          />
        </div>
        <div className="last-slide">
          <p>
            This group project was created to incorporate working in large
            groups and utilising human skills and agile methodologies. The idea
            was given to my group, which was based on wanting to grow my
            understanding of the content learned up to that point.
          </p>
          <p>
            Reflecting on this project, I learned that implementing the
            resources given to us truly helped the group navigate the larger
            headcount, make sure tasks were assigned properly, and that the
            productivity was maintained. These resources included (but not
            limited to) regular stand-ups, a detailed kanban, and following a
            gitflow method.
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
