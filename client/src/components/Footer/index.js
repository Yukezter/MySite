import React from 'react';

import { Container, Typography, Link } from '@material-ui/core'

import useStyles from './styles'

export default props => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container style={{ height: '100%' }}>
        <div className={classes.footerContent}>
              <Typography
                component="h4"
                variant="h4"
                color="primary"
                className={classes.brand}
              >
                BH
              </Typography>
              <div className={classes.socialIcons}>
                <Link href="https://github.com/Yukezter" target="_blank">
                  <img src={`${process.env.PUBLIC_URL}/social-icons/github.svg`} alt="My Github" className={classes.socialIcon}/>
                </Link>
                <Link href="https://www.linkedin.com/in/bryan-hinchliffe" target="_blank">
                  <img src={`${process.env.PUBLIC_URL}/social-icons/linkedin.svg`} alt="My LinkedIn" style={{ height: 25, width: 25 }} className={classes.socialIcon}/>
                </Link>
                <Link href="https://www.instagram.com/yukezter/?hl=en" target="_blank">
                  <img src={`${process.env.PUBLIC_URL}/social-icons/instagram.svg`} alt="My Instagram" style={{ height: 25, width: 25 }} className={classes.socialIcon}/>
                </Link>
              </div>
        </div>
      </Container>
    </footer>
  )
}