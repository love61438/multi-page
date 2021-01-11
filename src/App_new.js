import React, { Component } from 'react'
import Baby from './Baby'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rate: "", isBorn: true, count: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.spawnBaby = this.spawnBaby.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
  }

  //函式的定義
  handleClick () {
    this.setState({ isBorn: !this.state.isBorn })
  }
  spawnBaby () {
    if (this.state.isBorn) return <Baby />
  }
  handleClick2 () {
    this.setState({ count: this.state.count + 1 })
  }
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate is called')
    return true
  }
  componentDidUpdate (preProps, prevState, snapshot) {
    console.log("*** componentDidUpdate")
    if (this.state.count < 5)
      this.setState({ count: this.state.count + 1 })
    document.getElementById("me").append("Me!")
  }

  //渲染網頁，資訊(動作)呈現在網頁上
  render () {
    return (
      <div>
        <h3>test</h3>
        <button onClick={this.handleClick}>
          {(this.state.isBorn === true) ? "讓他回去肚子裡" : "讓他生"}
        </button> {this.spawnBaby()}
        <button onClick={this.handleClick2}>Click Me!</button><br />
        {this.state.count}<br />
        <div id="me"></div>
      </div>
    )
  }
}
export default App