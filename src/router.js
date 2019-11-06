import Home from './components/Home'
import Add from './components/Add'
import Setting from './components/Setting'

export default [
  {
    path: "/",
    component: Home,
    isExact: true,
  },
  {
    path: "/Add",
    component: Add,
    isExact: true,
  },
  {
    path: "/Setting",
    component: Setting,
    isExact: true,
  },
]