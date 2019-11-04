import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/">Post</Link>
      <Link to="/Search">Search</Link>
      <Link to="/User">User</Link>
    </div>
  )
}
export default Nav