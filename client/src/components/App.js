import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import clsx from 'clsx'

import { Box, makeStyles } from '@material-ui/core'

import Header from './Header'
import Footer from './Footer'
import Home from './pages/Home'
import Blog from './pages/Blog/index'
import Portfolio from './pages/Portfolio'

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

// Site wrapper to keep footer at bottom of body
// Just in case some pages don't have much content

// Also for top level load state

const useStyles = makeStyles(theme => ({
  siteWrapper: {
    position: 'relative',
    minHeight: '100vh',
  },
  contentWrapper: {
    paddingBottom: 100,
  },
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

const SiteWrapper = ({ children, pathname }) => {

  const classes = useStyles()

  const [pageLoading, setPageLoadingState] = useState(true)

  const changeLoadingState = (state, path) => () => {
    console.log(pathname, path)
    if (pathname !== path) {
      document.body.style.overflow = 'hidden'
      setPageLoadingState(state)
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      setPageLoadingState(false)
      document.body.style.overflow = 'visible'
    }, 3000)
  }, [pathname])

  const [loaderImgLoading, setLoaderImgLoadingState] = useState(true)

  const handleOnLoad = () => {
    setLoaderImgLoadingState(false)
  }

  return (
    <Box className={classes.siteWrapper}>
      <Box className={clsx(classes.loaderWrapper, !pageLoading && classes.hide)}>
        <img 
          src={`${process.env.PUBLIC_URL}/images/loader.svg`} 
          alt="Loading page"
          className={clsx(classes.loader, !loaderImgLoading && classes.show)}
          onLoad={handleOnLoad}
        />
      </Box>
      <Header changeLoadingState={changeLoadingState} />
        <Box className={classes.contentWrapper}>
          {children}
        </Box>
      <Footer />
    </Box>
  )
}

const SiteWrapperWithRouter = withRouter(({ children, location: { pathname }}) => (
  <SiteWrapper pathname={pathname}>
    {children}
  </SiteWrapper>
))

const Effects = ({ children, location: { pathname } }) => {

  // Whenever BrowserRouter path changes,

  // We want to move window back to the top of page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])  

  return children
}

export default props => {

  return (
    <BrowserRouter>
      <SiteWrapperWithRouter>
        <Switch>
          <Effects>
            {routes.map((route, index) => (
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
            ))}
          </Effects>
        </Switch>
      </SiteWrapperWithRouter>
    </BrowserRouter>
  )
}