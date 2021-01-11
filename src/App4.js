import React, { Component } from 'react'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repoName: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.handlePost = this.handlePost.bind(this)
    this.handleJson = this.handleJson.bind(this)
  }
  handleClick () {
    // fetch("https://api.github.com/users/jserv/repos", { method: "GET" })
    // fetch("https://apiservice.mol.gov.tw/OdService/download/A17030000J-000049-UIv", { method: "GET" })
    fetch("http://localhost/get_data.php", { method: "GET" })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // this.setState({ repoName: data[1]["月別"] })
        // var str = ""
        // for (var i = 0; i < data.length; i++) {
        //   str += "年月：" + data[i]["月別"] + "\n" + "新台幣：" + data[i]["新台幣"] + "\n" + "日圓：" + data[i]["日圓"] + "\n" + "\n"
        // }
        var str = ""
        str = data["key"] + "," + ["val"]
        this.setState({ repoName: str })
      })
      .catch(e => {
        console.log(e)
      })
  }
  handlePost () {
    const parm = { A: 123, B: 234 }
    const formData = Object.keys(parm).map(
      function (keyName) {
        return encodeURIComponent(keyName) + "=" + encodeURIComponent(parm[keyName])
      }
    ).join("&") //A=123, B=234

    fetch("http://localhost/get_data.php?f=1", {
      method: "POST",
      body: formData,
      headers: new Headers({
        "content-type": "application/x-www-form-urlencoded"
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        var str = ""
        str = data["total"]
        this.setState({ repoName: str })
      })
      .catch(e => {
        console.log(e)
      })
  }
  handleJson () {
    const parm = { A: 123, B: 234 }

    fetch("http://localhost/get_data.php?f=2", {
      method: "POST",
      body: JSON.stringify(parm),
      headers: new Headers()
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        var str = ""
        str = data["total"]
        this.setState({ repoName: str })
      })
      .catch(e => {
        console.log(e)
      })
  }
  render () {
    return (
      <div>
        <pre>
          {(this.state.repoName == null) ? "No Data Now" : this.state.repoName}
          <h1>取得Localhost/get_data.php檔案</h1>
          <button onClick={this.handleClick} >取得資料</button>
          <button onClick={this.handlePost} >取得Post資料</button>
          <button onClick={this.handleJson} >取得Json資料</button>
        </pre>
      </div>

    )
  }
}
export default App