import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onMango = () => {
    this.setState(prevMangos => ({mangoCount: prevMangos.mangoCount + 1}))
  }

  banana = () => {
    this.setState(prevBanana => ({bananaCount: prevBanana.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate {mangoCount} mangoes {bananaCount} bananas
          </h1>
          <div className="image-container">
            <div>
              <img
                className="image image2"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div className="button-container">
                <button className="button" type="button" onClick={this.onMango}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                className="image image2"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div className="button-container">
                <button className="button" type="button" onClick={this.banana}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
