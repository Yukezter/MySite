import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  navBar: {
    height: 120,
    maxHeight: 120,
    width: '100%',
    zIndex: 1,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    transition: 'background-color 0.5s, max-height 0.5s',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'initial',      
    }
  },
  navBarOnScroll: {
    backgroundColor: theme.palette.common.white,
    maxHeight: 70,
  },
  toolBar: {
    width: '100%',
    height: '100%',
  },
  navBarLogo: {
    position: 'absolute',
    left: 0,
    zIndex: 1001,
    color: theme.palette.secondary.main
  },
  navMenuIcon: {
    position: 'fixed',
    top: '6%',
    right: '6%',
    zIndex: 1001,
    borderRadius: 0,
    padding: 0,
    '&:hover, &:focus, &:active': {
      backgroundColor: 'inherit'
    },
    '& .hamburger-inner': {
      transition: 'none',
    },
    '& .hamburger-inner, .hamburger-inner:before, .hamburger-inner:after': {
      backgroundColor: theme.palette.common.white,
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',      
    }
  },
  navMenuIconOpen: {
    '& .hamburger-box .hamburger-inner, .hamburger-box .hamburger-inner:before, .hamburger-box .hamburger-inner:after': {
      backgroundColor: theme.palette.common.white
    },
  },
  navMenu: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: theme.palette.common.black,
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    zIndex: 1000,
    [theme.breakpoints.up('sm')]: {
      display: 'none',      
    }
  },
  navHeading: {
    marginTop: 20,
    marginBottom: 20,
  },
  navLinkHeading: {
    display: 'inline'
  },
  navLinks: {
    position: 'absolute',
    right: 0,
  },
  navLink: {
    padding: 8,
    marginTop: 10,
    marginBottom: 10,
    textDecoration: 'none',
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      color: theme.palette.primary.main
    },
    '&:focus, &:active': {
      cursor: 'default'
    },
  },
  navLinkScroll: {
    color: theme.palette.common.black
  }
}))