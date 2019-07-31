import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(theme => ({
  thumbnail: {
    width: '100%',
    height: '45%'
  },
  middleLine: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    lineHeight: '0.1em',
    width: '80%',
    margin: '0 auto'
  },
  date: {
    backgroundColor: theme.palette.common.black,
    padding: '0 10px'
  },
  projectLink: {
    textDecoration: 'none',
    color: theme.palette.common.white,
    '&:hover, &:active': {
      textDecoration: 'none',
      color: theme.palette.primary.main
    }
  }
}))