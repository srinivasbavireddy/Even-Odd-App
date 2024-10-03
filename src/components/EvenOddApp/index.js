import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onIncrease = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 101),
    }))
  }

  render() {
    const {count} = this.state

    let status

    if (count % 2 === 0) {
      status = 'Even'
    } else {
      status = 'Odd'
    }

    return (
      <div className="app-container">
        <div className="even-odd-container">
          <h1 className="title">Count {count}</h1>
          <p className="content">Count is {status}</p>
          <button type="button" className="btn" onClick={this.onIncrease}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp