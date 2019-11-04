import React from 'react'
import {Link , withRouter} from 'react-router-dom';
import { Icon } from 'antd'

// class Nav extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//     }
//   }
//   componentDidMount() {
//     console.log(this.props.location.pathname)
//   }
//   render() {
//     return (
//       <div className="Nav">
//         <Link to="/">
//           <Icon type="home" theme="twoTone" twoToneColor="#eb2f96" />
//         </Link>
//         <Link to="/Search">
//           <Icon type="search"/>
//         </Link>
//         <Link to="/User">
//           <Icon type="user"/>
//         </Link>
//       </div>
//     )
//   }
// }

const NavList = [
  {
    to: '/',
    type: "home",
    ischecked: false
  },
  {
    to: '/User',
    type: "user",
    ischecked: false
  },
  {
    to: '/Search',
    type: "search",
    ischecked: false
  }
]

const Nav = ({location}) => {
  const pathName = location.pathname
  console.log(pathName)
  return (
    <div className="Nav">
      {
        NavList.map(item => {
          return (
            <Link key={item.type}  to={item.to}>
              <Icon type={item.type} style={pathName === item.to ? {color:'#c04851'} : {color: "#3b818c"}}></Icon>
            </Link>
          )
        })
      }
    </div>
  )
}

export default withRouter(Nav)