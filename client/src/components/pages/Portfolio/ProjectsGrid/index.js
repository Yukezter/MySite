import React from 'react'

import { Box, Container, Grid, Typography, Link, Button, useTheme, useMediaQuery } from '@material-ui/core'

import useStyles from './styles'

import projects from './projects'

export default props => {

  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  // const [state, setState] = useState(0)

  // useEffect(() => {
  //   if (state.imagesLoaded === projects.length) { 
  //     props.changeLoadingState(false)()
  //   }
  // }, [state])

  return (
    <section>
      <Container>
        <Box>
          <Grid container spacing={matches ? 4 : 1}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box textAlign="center" height="100%" py={{ xs: 3 }}>
                  <img 
                    src={`${process.env.PUBLIC_URL}${project.imgSrc}`} 
                    alt={project.title}
                    className={classes.thumbnail}
                  />
                  <Box my={{ xs: 2 }}>
                    <Typography
                      component="p"
                      variant="subtitle2"
                      textAlign="center"
                      className={classes.middleLine}
                    >
                      <span className={classes.date}>
                        {project.date}
                      </span>
                    </Typography>
                  </Box>
                  <Box my={{ xs: 2 }}>
                    <Typography
                        component="h4"
                        variant="h5"
                      >
                        <Link 
                          href={project.site} 
                          target="_blank"
                          className={classes.projectLink}
                        >
                          {project.title}                      
                        </Link>
                      </Typography>
                  </Box>
                  <Typography
                    component="p"
                    variant="subtitle1"
                  >
                    {project.body}
                  </Typography>
                  <Box py={{ xs: 3 }}>
                    <Button
                      href={project.href}
                      target="_blank"
                      variant="outlined"
                      color="inherit"
                      style={{ borderRadius: 1 }}
                    >
                      View Repository
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  )
}