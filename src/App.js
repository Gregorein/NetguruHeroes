import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home from "routes/Home"
import Page404 from "routes/Page404"

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/add" component={Home} />
      <Route path="/details/:id" component={Home} />
      <Route component={Page404} />
    </Switch>
  </Router>
)

export default App
