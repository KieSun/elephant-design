import React from 'react'
import { HashRouter, Switch, Link } from 'react-router-dom'
import Router from './router'
import '../../dist/index.es.css'
import './index.css'

const BasicRoute = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/loading">Loading</Link>
        </li>
        <li>
          <Link to="/skeleton">Skeleton</Link>
        </li>
        <li>
          <Link to="/progress">progress</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Router />
    </Switch>
  </HashRouter>
)

export default BasicRoute
