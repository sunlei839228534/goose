import React from 'react'
import {Link , withRouter} from 'react-router-dom';
import { Icon } from 'antd'

const NavList = [
  {
    to: '/',
    type: "home",
  },
  {
    to: '/Add',
    type: "plus-circle",
  },
  {
    to: '/Setting',
    type: "setting",
  },
]

const Nav = ({location}) => {
  const pathName = location.pathname || '/'
  return (
    <div className="Nav">
      {
        NavList.map(item => {
          return (
            <Link key={item.type}  to={item.to}>
              <Icon type={item.type} theme={pathName === item.to ? "filled" : "outlined"}></Icon>
            </Link>
          )
        })
      }
    </div>
  )
}

export default withRouter(Nav)