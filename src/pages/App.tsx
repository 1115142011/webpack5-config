
import routerConfigList from "../router";
import React, { Suspense } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Auth from "@/router/Auth";
function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div />}>
        <Switch>
          {routerConfigList.map((ROUTE) => (
            <Route key={ROUTE.path} path={ROUTE.path} render={(props) => Auth(ROUTE, props)} />
          ))}
          <Redirect from='/' to='/login' />
        </Switch>
      </Suspense>
    </HashRouter>
  )
}

export default App