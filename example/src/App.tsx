import React from 'react'
import { HashRouter, Switch, Link } from 'react-router-dom'
import Router from './router'
import '../../dist/index.es.css'
import './index.css'

const routers = ['loading', 'skeleton', 'icon', 'slider']

const BasicRoute = () => (
  <HashRouter>
    <nav>
      <ul>
        {routers.map(item => (
          <li key={item}>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <Switch>
      <Router />
    </Switch>
  </HashRouter>
)

export default BasicRoute
