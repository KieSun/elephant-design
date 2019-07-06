import Loading from './pages/loading'
import Skeleton from './pages/skeleton'
import { Route } from 'react-router'
import React from 'react'

const Router = () => (
  <>
    <Route exact path="/loading" component={Loading} />
    <Route exact path="/skeleton" component={Skeleton} />
  </>
)

export default Router
