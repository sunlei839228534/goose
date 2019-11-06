import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Nav from './common/Nav'
import RouterArr from './router'
import './App.css';

function App() {
  return (
    <>
    <Router>
      <div className="Context">
        <Switch>
          {RouterArr.map(i => {
            return(
              <Route key={i.path} path={i.path} component={i.component} exact={i.isExact ? true : false}></Route>
            )
          })}
        </Switch>
      </div>
      <Nav />
    </Router>
    </>
  )
}

export default App;
