// Write your code here
import {Component} from 'react'
import './index.css'

const headsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImg: headsImg, headsCount: 0, tailsCount: 0}

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImg = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImg = headsImg
      latestHeadsCount += 1
    } else {
      tossImg = tailsImg
      latestTailsCount += 1
    }
    this.setState({
      tossResultImg: tossImg,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  getTotalTosses = () => {
    const {headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return totalCount
  }

  render() {
    const {tossResultImg, totalHeads, totalTails} = this.state
    const totalCount = this.getTotalTosses()
    console.log(typeof totalHeads)

    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img className="image" alt="toss result" src={tossResultImg} />
          <button className="button" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount} </p>
            <p className="count">Heads: {totalHeads} </p>
            <p className="count">Tails: {totalTails} </p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
