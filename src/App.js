import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Nav from './common/Nav'
import './App.css';

function App() {
  return (
    <>
    <Router>
      <div className="Context">
        <Switch>
          <Route path="/" component={Post} exact></Route>
          <Route path="/User" component={User} exact></Route>
          <Route path="/Search" component={Search} exact></Route>
        </Switch>
      </div>
      <Nav />
    </Router>
    </>
  )
}

const User = () => <div>user</div>

const Post = () => <div>Post</div>

const Search = () => <div>Search</div>

export default App;
