import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import App from './components/App'
import store from './store'

const defaultTheme = createMuiTheme({
  palette: {
    text: {
      primary: '#f5f1ed'
    },
    background: {
      default: '#252323'
    },
    common: {
      black: '#101010',
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
    }
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>, document.getElementById('root')
)