import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
    <Router>
      <div class="Context">
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/User" component={User} exact></Route>
          <Route path="/Post" component={Post} exact></Route>
        </Switch>
      </div>
      <div className="Nav">
        <Link to="/">Home</Link>
        <Link to="/User">User</Link>
        <Link to="/Post">Post</Link>
      </div>
    </Router>
    </>
  )
}

const User = () => <div>user</div>

const Post = () => <div>Post</div>

const Home = () => <div>Home</div>

export default App;
