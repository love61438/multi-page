import React, { Component } from 'react'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repoName: null
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    // fetch("https://api.github.com/users/jserv/repos", { method: "GET" })
    fetch("https://apiservice.mol.gov.tw/OdService/download/A17030000J-000049-UIv", { method: "GET" })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ repoName: data[1]["月別"] })
        var str = ""
        for (var i = 0; i < data.length; i++) {
          str += "年月：" + data[i]["月別"] + "\n" + "新台幣：" + data[i]["新台幣"] + "\n" + "日圓：" + data[i]["日圓"] + "\n" + "\n"
        }
        this.setState({ repoName: str })
      })
      .catch(e => {
        console.log(e)
      })
  }
  render () {
    return (
      <pre><div>
        {(this.state.repoName == null) ? "2019/10~2020/10" : this.state.repoName}
        <h1>新台幣 vs 日圓 匯率</h1>
        <button onClick={this.handleClick} >取得資料</button>
      </div>
      </pre>
    )
  }
}
export default App