import React from 'react';

import { Container, Link } from '@material-ui/core'

import useStyles from './styles'

const socialIcons = [
  {
    href: 'https://github.com/Yukezter',
    imgSrc: '/social-icons/github.svg',
    imgAlt: 'My Github'
  },
  {
    href: 'https://www.linkedin.com/in/bryan-hinchliffe',
    imgSrc: '/social-icons/linkedin.svg',
    imgAlt: 'My Linked'
  },
  {
    href: 'https://www.instagram.com/yukezter/?hl=en',
    imgSrc: '/social-icons/instagram.svg',
    imgAlt: 'My Instagram'
  }
]

export default props => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container style={{ height: '100%' }}>
        <div className={classes.footerContent}>
              <div className={classes.socialIcons}>
                {socialIcons.map(icon => (
                  <Link href={icon.href} target="_blank">
                    <img 
                      src={`${process.env.PUBLIC_URL}${icon.imgSrc}`} 
                      alt={icon.imgAlt} 
                      className={classes.socialIcon}
                    />
                  </Link>
                ))}
              </div>
        </div>
      </Container>
    </footer>
  )
}