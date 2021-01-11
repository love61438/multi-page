import React, { Component } from 'react' /*Component(元件)*/
class App2 extends Component { /*App2(元件) extends(繼承) Component(元件)*/
  constructor(props) {  /*constructor(建構函式)props(參數)*/
    super(props) /*跟上一層借參數過來*/
    this.state = {
      myname: "",
      inc_val: 50
    }
    this.changeMyName = this.changeMyName.bind(this)
    this.incValue = this.incValue.bind(this)
  }
  changeMyName () {
    this.setState({ myname: "Hello Thursday!" })
  }

  incValue () {
    if (this.state.inc_val > 0)
      this.setState({ inc_val: this.state.inc_val - 10 }, () => {
        if (this.state.inc_val == 0)
          this.setState({ myname: "Happy MEW YEAR!" })
      })
    else
      this.setState({ myname: "Happy New Year!" })
  }

  render () { /*render接受輸入的資料並回傳需要顯示的內容*/
    return (  /*return回傳至下方*/ /*使用this*/
      <>
        <button onClick={this.props.handleClick}>{this.props.name}</button>
        <h1 id="show-area">{this.props.children}</h1>
        <button onClick={this.props.changeName} value="here!">My name</button>
        <button onClick={this.changeMyName}>Change My name</button><br />
        {this.state.myname}<br />
        <button onClick={this.incValue}>倒數:{this.state.inc_val}</button>
      </>
    )
  }
}

export default App2 /*直接匯出純值或表達式結果*/