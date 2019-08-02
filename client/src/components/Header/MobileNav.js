import React, { useState, useEffect } from 'react'
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
      onClick={props.handleMenuClick}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </IconButton>
  )
}

const FullScreenNav = props => {

  const handleLinkClick = () => {
    props.handleMenuClick()
  }

  return (
    <Fade in={props.isOpen} timeout={200}>
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
                className={props.classes.navLink} 
                onClick={handleLinkClick}>
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
  const [isOpen, setMenuState] = useState(false)

  useEffect(() => {
    const handleWindowResize = window.addEventListener('resize', e => {
      if (e.target.innerWidth > theme.breakpoints.values.sm && isOpen) {
        document.body.style.overflow = 'visible'
        setMenuState(false)
      }
    })
    return () => window.removeEventListener('resize', handleWindowResize)
  })

  const handleMenuClick = () => {
    if (isOpen) {
      document.body.style.overflow = 'visible'
      setMenuState(false)
      return
    }
    document.body.style.overflow = 'hidden'
    setMenuState(true)
  }

  return (
    <React.Fragment>
      <MenuButton 
        classes={props.classes} 
        isOpen={isOpen} 
        handleMenuClick={handleMenuClick} 
      />
      <FullScreenNav
        classes={props.classes}
        isOpen={isOpen}
        handleMenuClick={handleMenuClick}
        links={props.links}
      />
    </React.Fragment>
  )
}

export default MobileNav