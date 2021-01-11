//React讀取資料...
import React, { Component } from 'react'
class Baby extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRightDad: true
    }
  }
  static getDerivedStateFromProps (props, state) {
    console.log("getDerivedSate")
    if (props.dad !== "Chang")
      return { isRightDad: false }
  }
  componentDidMount () {
    console.log("componentDidMount")
    setTimeout(() => {
      if (this.state.isRightDad === true)
        document.getElementById("msg").innerHTML = "安安的媽媽是小美"
      else
        document.getElementById("msg").innerHTML = "安安的媽媽是誰，我真不知道"
    }, 3000)
    document.getElementById("talk").append("Dad!")
  }
  componentWillUnmount () {
    document.getElementById("talk").innerHTML = ""
  }
  //渲染網頁，資訊(動作)呈現在網頁上
  render () {
    console.log("render")
    return (
      <div id="msg">
        安安的媽媽是誰...?
      </div>
    )
  }
}
export default Baby