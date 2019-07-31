import React from 'react'

import { Typography, Container, IconButton, Button, Box } from '@material-ui/core'
import { ArrowDownward } from '@material-ui/icons'

import { Link as ScrollLink } from 'react-scroll'

import Particles from './Particles'

import useStyles from './styles'

export default props => {
  const classes = useStyles()
  return (
    <section className={classes.section}>
      <Particles />
      <Container style={{ height: '100%' }}>
        <div className={classes.contentWrapper}>
          <Box textAlign="left">
            <Box my={{ xs: 1 }}>
              <Typography
                component="h1"
                variant="h4"
              >
              Hi, I'm <span className={classes.coloredName}>Bryan Hinchliffe</span>.
              </Typography>
            </Box>
            <Box my={{ xs: 1 }}>
              <Typography
                component="h2"
                variant="h5"
              >
              I'm a full stack application developer.
              </Typography>
            </Box>
            <Box my={{ xs: 3 }}>
              <Typography
                component="h5"
                variant="h6"
              >
              My passion is building <i>engaging, fast, and scalable</i> applications.
              </Typography>
            </Box>
            <Box width="100%" textAlign="center" m={{ xs: '12px 2px' }}>
              <Button
                href="https://github.com/Yukezter"
                target="_blank"
                size="large"
                variant="outlined"
                color="inherit"
                style={{ borderRadius: 1 }}
                >
                Learn More
              </Button>
            </Box>
          </Box>
          <IconButton 
            className={classes.introDownIcon}
            color="inherit"
          >
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration= {500}
            >
              <ArrowDownward />
            </ScrollLink>
          </IconButton>
        </div>
      </Container>
    </section>
  )
}