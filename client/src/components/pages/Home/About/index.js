import React from 'react'

import { Typography, Container, Grid, IconButton, Box } from '@material-ui/core'
import { Class, Folder, School } from '@material-ui/icons'

// import useStyles from './styles'

const about = [
  {
    section: 'Certifications',
    body: 'I\'ve been awarded a C++ Certificate of Completion from Orange Coast College\'s computer science department, and recently completed University of Irvine\'s Full Stack Coding Bootcamp.',
    font: Class
  },
  {
    section: 'Projects',
    body: 'I\'ve built many types of applications in an effort to keep a diverse porfolio; from blogs and chat systems to web scrapers and data visualizations. I stay focused on learning new tools to strengthen my versatility.',
    font: Folder
  },
  {
    section: 'Education',
    body: 'Currently attending Orange Coast community college and plan to transfer to a California University to pursue a bachelor\'s degree in Computer Science followed by a master\'s.',
    font: School
  }
]

export default props => {
  return (
    <section id="about">
      <Container>
        <Box py={{ xs: 4, md: 9 }}>
          <Grid container>
            <Grid item xs={12}>
              <Box my={{ xs: 10, md: 15 }} textAlign="center">
                <Typography
                  component="h2"
                  variant="h4"
                >
                  About me.
                </Typography>
              </Box>
            </Grid>
            {about.map((item, index) => (
              <Grid item xs={12} sm={8} md={4} key={index}>
                <Box textAlign="center">
                  <IconButton
                    color="inherit"
                    >
                      <item.font style={{ fontSize: 50 }} />
                  </IconButton>
                </Box>
                <Box textAlign="center">
                  <Typography
                    component="h5"
                    variant="h5"
                  >
                  {item.section}
                  </Typography>
                </Box>
                <Box py={{ xs: 4 }} m={{ xs: 4 }} textAlign="center">
                  <Typography
                    component="p"
                  >
                  {item.body}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  )
}