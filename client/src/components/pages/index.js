import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import clsx from 'clsx'

import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

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

const useStyles = makeStyles(theme => ({
  loaderWrapper: {
    position: 'absolute',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: theme.palette.background.default,
    zIndex: 2000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    height: 80,
    width: 80,
    display: 'none'
  },
  hide: {
    display: 'none',
  },
  show: {
    display: 'initial',
  }
}))

export default props => {

  // const classes = useStyles()

  // const [loaderImgLoading, setLoaderImgLoadingState] = useState(true)

  // const handleOnLoad = () => {
  //   setLoaderImgLoadingState(false)
  // }

  return (
    //   <Box className={clsx(classes.loaderWrapper)}>
    //     <img 
    //       src={`${process.env.PUBLIC_URL}/images/loader.svg`}
    //       alt="Loading page"
    //       className={clsx(classes.loader, !loaderImgLoading && classes.show)}
    //       onLoad={handleOnLoad}
    //     />
    //   </Box>
    routes.map((route, index) => (
      <Route 
        exact 
        path={route.path} 
        render={props => (
          <route.component 
            {...props}
          />
        )}
        key={index}
      />
    ))
  )

}