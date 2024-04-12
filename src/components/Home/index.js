import './index.css'
import GraphPopulation from '../GraphPopulation'

import BitcoinPricesCard from '../BitcoinPricesCard'

const Home = () => (
  <div id="home" className="home-container">
    <div className="population-container">
      <div className="profile-container">
        <h1 className="home">Hello, Sai Vyshnavi</h1>
        <img
          src="http://icons.iconarchive.com/icons/google/noto-emoji-people-bodyparts/1024/12050-waving-hand-icon.png"
          alt="wave"
          className="img-wave"
        />
      </div>
      <div className="trade-container">
        <p className="para">
          Welcome to <span className="trade">Spot trading!</span>
        </p>
        <button type="button" className="start-trade-btn">
          Start Trading
        </button>
      </div>

      <GraphPopulation />
      <BitcoinPricesCard />
    </div>
  </div>
)
export default Home
