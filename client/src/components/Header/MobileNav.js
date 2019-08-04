import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import { Typography, Fade, IconButton, useTheme } from '@material-ui/core'
import './menuIcon.css'

const MenuButton = props => {
  return (
    <IconButton
      className={clsx(
        props.classes.navMenuIcon, 
        'hamburger hamburger--collapse', 
        props.isOpen && ['is-active', props.classes.navMenuIconOpen].join(' ')
      )}
      color="inherit"
      onClick={props.handleMenuButton}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </IconButton>
  )
}

const FadeInMenu = props => {

  return (
    <Fade in={props.isOpen} timeout={500}>
      <div className={props.classes.navMenu}>
        {props.links.map((link, index) => (
            <Typography
              className={props.classes.navHeading}
              component="h3"
              variant="h4"
              noWrap
              key={index}
            >
              <Link 
                to={link.path} 
                className={props.classes.navLink}>
                {link.text}                                    
              </Link>
            </Typography>
          ))}
      </div>
    </Fade>
  )
}

const MobileNav = props => {

  const theme = useTheme()

  useEffect(() => {
    const handleWindowResize = window.addEventListener('resize', e => {
      if (e.target.innerWidth > theme.breakpoints.values.sm && props.isOpen) {
        props.close()
        document.body.style.overflow = 'visible'
      }
    })
    return () => window.removeEventListener('resize', handleWindowResize)
  })

  const handleMenuButton = () => {
    if (props.isOpen) {
      document.body.style.overflow = 'visible'
      props.close()
      return
    }
    document.body.style.overflow = 'hidden'
    props.open()
  }

  return (
    <React.Fragment>
      <MenuButton 
        classes={props.classes} 
        isOpen={props.isOpen} 
        handleMenuButton={handleMenuButton} 
      />
      <FadeInMenu
        classes={props.classes}
        isOpen={props.isOpen}
        links={props.links}
      />
    </React.Fragment>
  )
}

export default MobileNav