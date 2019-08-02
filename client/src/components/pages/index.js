import React, { useEffect } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// import { makeStyles } from '@material-ui/styles'

import Home from './Home'
import Blog from './Blog'
import Portfolio from './Portfolio'

import { loading, doneLoading } from '../../actions/loadActions'

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

const Pages = ({ loading, doneLoading, pathname }) => {

  // const classes = useStyles()

  useEffect(() => {
    loading()
  }, [pathname])

  return (
    routes.map((route, index) => (
      <Route 
        exact 
        path={route.path} 
        render={props => (
          <route.component 
            {...props}
            doneLoading={doneLoading}
          />
        )}
        key={index}
      />
    ))
  )
}

const PagesWithRouter = withRouter(props => {
  return <Pages {...props} pathname={props.location.pathname} />
})

const mapActionsToProps = {
  loading,
  doneLoading
}

export default connect(null, mapActionsToProps)(PagesWithRouter)