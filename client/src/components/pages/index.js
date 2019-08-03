import React from 'react'
import { Route } from 'react-router-dom'

// import { makeStyles } from '@material-ui/styles'

import Home from './Home'
import Blog from './Blog'
import Portfolio from './Portfolio'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/portfolio',
    component: Portfolio
  },
]

const Routes = ({loading, doneLoading }) => {

  // const classes = useStyles()

  return (
    routes.map((route, index) => (
      <Route 
        exact 
        path={route.path} 
        render={props => (
          <route.component 
            {...props}
            loading={loading}
            doneLoading={doneLoading}
          />
        )}
        key={index}
      />
    ))
  )
}

export default Routes