import Loading from './pages/loading'
import Skeleton from './pages/skeleton'
import Progress from './pages/progress'
import { Route } from 'react-router'
import React from 'react'

const Router = () => (
  <>
    <Route exact path="/loading" component={Loading} />
    <Route exact path="/skeleton" component={Skeleton} />
    <Route exact path="/progress" component={Progress} />
  </>
)

export default Router
