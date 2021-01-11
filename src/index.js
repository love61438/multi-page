import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App2 from './App4'
//import App from './App_new'
import App from './App_ui'
import Baby from './Baby'
import TestFunction from './TestFunction'
import reportWebVitals from './reportWebVitals'

const printMessage = () => {
  document.getElementById("show-area").innerHTML = "Mooooo~"
}

const changeName = (newName) => {
  name = newName.target.value
  console.log('hey!' + name)
}
var name = "舊的名字"
ReactDOM.render(
  // <div>
  //   <TestFunction name={"Press it↓"} change={"Just change!"} handleClick={printMessage}>Hi, I am your Children</TestFunction>
  // </div >,
  // <App2 name={"Click it!"} handleClick={printMessage}>9487940</App2 >,
  <div>
    <App />
    <div id="talk"></div>
  </div>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
