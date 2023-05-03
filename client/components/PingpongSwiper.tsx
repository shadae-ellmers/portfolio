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
          <p className="first-slide-text">
            Send a notification to your friends when you want to spontaneously
            hang out - a simple pager app to kill your group chat and connect in
            person.
          </p>
          <p>Key tech features:</p>
          <ul>
            <li>React Native</li>
            <li>TypeScript</li>
            <li>SQLite</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>Knex.js</li>
            <li>Jest</li>
            <li>Redux</li>
            <li>Auth0</li>
          </ul>
          <p className="first-slide-text">
            Click the arrows below to flow through the app.
          </p>
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
            This page is where the user can send a &apos;ping&apos; to their
            friends. The user can choose an activity prompt, enter a location,
            then press the pingpong ball to send the ping out to others on their
            friends list.
          </p>
          <img
            className="slider-img"
            src="../../images/pingpong/2-ping.png"
            alt="ping page"
          />
        </div>
        <div className="one-slide">
          <p>
            This is what displays on the &apos;ping&apos; page when the user has
            an active ping. This can be undone by pressing the pingpong ball
            again.
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
        <div className="last-slide">
          <p>
            This project was created as a final group project for Dev Academy. I
            was drawn to the idea of this app as I find the planning behind
            socialising tedious, especially on social media. The creation of the
            app was a chance for me to push my limits and challenge myself with
            new tech.
          </p>
          <p>
            Reflecting on this project, an improvement would be to have push
            notifications, so that a user could see if a friend had sent a ping
            without going onto the app to refresh.
          </p>
          <p>
            This project taught me a lot about how quickly I can learn new
            skills. I also learnt the power that soft skills can have on
            creating a great and productive team dynamic.
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
