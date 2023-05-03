import AstrologySwiper from './AstrologySwiper'

function Astrology() {
  return (
    <div className="astrology">
      <h2>Astrology</h2>
      <a
        href="https://github.com/shadae-ellmers/astrology"
        target="_blank"
        rel="noreferrer noopener"
      >
        View this project on Github →
      </a>
      <div className="the-slider">
        <AstrologySwiper />
      </div>
    </div>
  )
}

export default Astrology
