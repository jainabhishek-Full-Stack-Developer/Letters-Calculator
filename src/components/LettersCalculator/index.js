import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {word: 0}

  getWord = e => {
    this.setState({word: e.target.value.length})
  }

  render() {
    const {word} = this.state

    return (
      <div className="container">
        <div className="detailsBox">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="letter">Enter the phrase</label>
          <br />
          <input
            placeholder="Enter the phrase"
            id="letter"
            type="text"
            onChange={this.getWord}
          />
          <br />
          <div className="wordCount">
            <p>No.of letters: {word}</p>
          </div>
        </div>
        <div className="imgBox">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="calImage"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
