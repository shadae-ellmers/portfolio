import ReactDOM from 'react-dom'
import ReactSwipe from 'react-swipe'

function PingpongSwiper(reactSwipeEl: any) {
  return (
    <div className="swiper-container">
      <ReactSwipe
        className="swiper"
        swipeOptions={{ continuous: false }}
        ref={(el) => (reactSwipeEl = el)}
      >
        <div className="first-slide">
          <h3>Key tech features:</h3>
          <ul className="tech-list">
            <li>React Native</li>
            <li>TypeScript</li>
            <li>SQLite</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>Knex.js</li>
            <li>Jest</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className="one-slide">
          <p>
            This is the first page a user sees when they open the app. This page
            gets the user to log in, or sign up if not registered yet.
          </p>
          <img
            className="slider-img"
            src="../../images/pingpong/1-home.png"
            alt="home page"
          />
        </div>
        <div className="one-slide">
          <p>
            This page is where the user can send a `ping` to their friends. The
            user can choose an activity prompt, enter a location, then press the
            pingpong ball to send the ping out to others on their friends list.
          </p>
          <img
            className="slider-img"
            src="../../images/pingpong/2-ping.png"
            alt="ping page"
          />
        </div>
        <div className="one-slide">
          <p>
            This is what displays on the `ping` page when the user has an active
            ping. This can be undone by pressing the pingpong ball again.
          </p>
          <img
            className="slider-img"
            src="../../images/pingpong/3-ping-active.png"
            alt="ping active page"
          />
        </div>
        <div className="one-slide">
          <p>
            This page is where the user can see everything friend related. It is
            the location for seeing all friends, which friends have active
            pings, their friend requests, and the icon to add a friend.
          </p>
          <img
            className="slider-img"
            src="../../images/pingpong/4-friends.png"
            alt="friends page"
          />
        </div>
        <div className="one-slide">
          <p>
            This page is for a user to add friends by username, and find their
            own username to share with friends.
          </p>
          <img
            className="slider-img"
            src="../../images/pingpong/5-add-friends.png"
            alt="add friends page"
          />
        </div>
        <div className="one-slide">
          <p>This is the settings page.</p>
          <img
            className="slider-img"
            src="../../images/pingpong/6-settings.png"
            alt="settings page"
          />
        </div>
        <div className="one-slide">
          <p>
            This is the tutorial page, where a user can find directions on how
            to use the app.
          </p>
          <img
            className="slider-img"
            src="../../images/pingpong/7-tutorial.png"
            alt="tutorial page"
          />
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
