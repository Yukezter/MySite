import React from 'react'

import { Typography, Container, Grid, Box } from '@material-ui/core'

import 'devicon'

import useStyles from './styles'

const icons = [
  'mongodb-plain', 'express-original', 
  'react-original', 'nodejs-plain', 
  'mysql-plain', 'python-plain',
  'django-plain', 'cplusplus-line-wordmark'
]

export default props => {
  const classes = useStyles()
  return (
    <section>
      <Container>
        <Box py={{ xs: 4, md: 9 }}>
          <Grid container>
            <Grid item xs={12}>
              <Box my={{ xs: 3, md: 5 }} textAlign="center">
                <Typography
                  component="h2"
                  variant="h4"
                >
                  My tools...
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box my={{ xs: 5 }}>
            <Grid container>
              {icons.map((icon, index) => (
                <Grid item xs={6} md={3} className={classes.gridIcon} key={index}>
                  <i className={`devicon-${icon} ${classes.stackIcons}`}></i>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </section>
  )
}