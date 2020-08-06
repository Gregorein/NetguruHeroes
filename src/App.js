import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home from "./routes/Home"
import Add from "./routes/Add"
import Details from "./routes/Details"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/add" children={<Add />} />
        <Route path="/details/:id" children={<Details />} />
      </Switch>
    </Router>
  )
}

export default App
