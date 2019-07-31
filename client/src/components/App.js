import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'


import Header from './Header'
import Footer from './Footer'
import Home from './pages/Home'
import Blog from './pages/Blog/index'
import Portfolio from './pages/Portfolio'

const defaultTheme = createMuiTheme({
  palette: {
    text: {
      primary: '#f5f1ed'
    },
    background: {
      default: '#252323'
    },
    common: {
      black: '#252323',
      white: '#f5f1ed'
    },
    primary: {
      main: '#70798c',
    },
    secondary: {
      main: '#70798c'
    }
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
})

// Now that the theme breakpoints have been defined by MUI,
// We can add typography breakpoints as overrides if we want
const { breakpoints } = defaultTheme

const theme = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h1: {
        [breakpoints.up('sm')]: {
        },
        [breakpoints.up('md')]: {
        },
        [breakpoints.up('lg')]: {
        },
      },
      h2: {
        [breakpoints.up('sm')]: {
        },
        [breakpoints.up('md')]: {
        },
        [breakpoints.up('lg')]: {
        },
      }
    }
  }
}

// Site wrapper to keep footer at bottom of body
// Just in case some pages don't have much content 
const useStyles = makeStyles(theme => ({
  siteWrapper: {
    position: 'relative',
    minHeight: '100vh'
  },
  contentWrapper: {
    paddingBottom: 100
  }
}))

// Whenever a BrowserRouter Link is clicked,
// We want to move window back to the top of page
const ScrollToTop = ({ children, location: { pathname } }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children
}

export default props => {
  const classes = useStyles()
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className={classes.siteWrapper}>
            <Header />
            <div className={classes.contentWrapper}>
              <Switch>
                <ScrollToTop>
                  <Route exact path="/" render={props => (
                    <Home {...props} />
                  )} />
                  <Route exact path="/blog" render={props => (
                    <Blog {...props} />
                  )} />
                  <Route exact path="/portfolio" component={props => (
                    <Portfolio {...props} />
                  )} />
                </ScrollToTop>
              </Switch>
            </div>
            <Footer />
          </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}