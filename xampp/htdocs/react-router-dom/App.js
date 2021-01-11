import React from 'react'
import { HashRouter, Route } from "react-router-dom"
import FirstPage from "./FirstPage"
import SecondPage from "./SecondPage"

const App = () => {
  return (
    <HashRouter>
      <Route path="/" component={FirstPage} />
      <Route path="/second" component={SecondPage} />
    </HashRouter>
  )
}
