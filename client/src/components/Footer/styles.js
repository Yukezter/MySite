import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.black,
    height: 60,
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  footerContent: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    height: '100%'
  },
  socialIcons: {
    position: 'absolute',
    right: 0,
  },
  socialIcon: {
    margin: 'auto 10px',
    height: 25, 
    width: 25
  }
}))