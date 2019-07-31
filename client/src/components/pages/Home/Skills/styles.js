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
      '&:hover, :focus': {
        transform: 'scale(1.1)',
        boxShadow: `5px 5px 5px 5px black`
      },
    },
    [theme.breakpoints.up('md')]: {
      height: 220,
    },
  },
  stackIcons: {
    fontSize: '4.5rem',
  }
}))