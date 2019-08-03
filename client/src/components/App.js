import React, { useEffect } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { Box, makeStyles } from '@material-ui/core'

import Header from './Header'
import Footer from './Footer'
import Routes from './pages'

import { loading, doneLoading } from '../actions/loadActions'

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
              <Routes
                loading={this.props.loading}
                doneLoading={this.props.doneLoading}
              />
            </Effects>
          </Switch>
        </SiteWrapper>
      </BrowserRouter>
    )
  }
}

const mapActionsToProps = {
  loading,
  doneLoading
}

export default connect(null, mapActionsToProps)(App)