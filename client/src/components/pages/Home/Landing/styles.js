import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(theme => ({
  section: {
    minHeight: '100vh',
    height: '100vh',
    width: '100%',
    position: 'relative',
  },
  contentWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coloredName: {
    color: theme.palette.secondary.main
  },
  introDownIcon: {
    position: 'absolute',
    bottom: '5%',
    color: 'white',
    display: 'none',
    padding: 0,
    animation: '3s $spring infinite',
    '&:hover, &:focus': {
      backgroundColor: 'inherit'
    },
    '& svg': {
      fontSize: '3.5rem'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'initial',
    }
  },
  '@keyframes spring': {
    '0%': {
      transform: 'translateY(0px)'
    },
    '50%': {
      transform: 'translateY(15px)'
    },
    '100%': {
      transform: 'translateY(0px)'
    }
  },
}))