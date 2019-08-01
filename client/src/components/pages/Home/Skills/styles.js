import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(theme => ({
 gridIcon: {
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.2s',
    [theme.breakpoints.up('sm')]: {
      height: 250,
    },
    [theme.breakpoints.up('md')]: {
      height: 220,
      '&:hover, :focus': {
        transform: 'scale(1.1)',
        boxShadow: theme.shadows[23]
      },
    },
  },
  stackIcons: {
    fontSize: '4.5rem',
  }
}))