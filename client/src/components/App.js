import React, { useEffect } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import { Box, makeStyles } from '@material-ui/core'

import Header from './Header'
import Footer from './Footer'
import Routes from './pages'

// Site wrapper to keep footer at bottom of body
// Just in case some pages don't have much content
const useStyles = makeStyles(theme => ({
  siteWrapper: {
    position: 'relative',
    minHeight: '100vh',
  },
  contentWrapper: {
    paddingBottom: 100,
  },
}))

const SiteWrapper = ({ children }) => {
  const classes = useStyles()
  return (
    <Box className={classes.siteWrapper}>
      <Header />
        <Box className={classes.contentWrapper}>
          {children}
        </Box>
      <Footer />
    </Box>
  )
}

const Effects = ({ children, location: { pathname } }) => {

  // Whenever BrowserRouter path changes,
  // We want to move window back to the top of page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])  

  return children
}

const App = class extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <SiteWrapper>
          <Switch>
            <Effects>
              <Routes />
            </Effects>
          </Switch>
        </SiteWrapper>
      </BrowserRouter>
    )
  }
}

export default App