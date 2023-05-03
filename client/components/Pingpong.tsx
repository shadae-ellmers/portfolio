import { Link } from 'react-router-dom'
import PingpongSwiper from './PingpongSwiper'

function Pingpong() {
  return (
    <div className="pingpong">
      <h2>PingPong</h2>
      <a
        href="https://github.com/shadae-ellmers/pingpong"
        target="_blank"
        rel="noreferrer noopener"
      >
        View this project on Github →
      </a>
      <div className="the-slider">
        <PingpongSwiper />
      </div>
    </div>
  )
}

export default Pingpong
