import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useGesture } from 'react-use-gesture'
import clsx from 'clsx'

import {
  AppBar, Toolbar, Container, Typography
} from '@material-ui/core'

const Logo = props => (
  <Typography
    className={props.classes.navBarLogo}
    component="h1"
    variant="h5"
    color="primary"
    align="left"
    noWrap
  >
    BH
  </Typography>
)

const DesktopNav = props => {

  const [scrolledDown, setNavState] = useState(false)

  const bind = useGesture({
    onScroll: (scroll) => {
      if (!scrolledDown && scroll.xy[1] > 0) setNavState(true)
      if (scrolledDown && scroll.xy[1] === 0) setNavState(false)
    } 
  }, { domTarget: window })

  return (
    <AppBar 
      {...bind()} 
      position="fixed" 
      className={clsx(props.classes.navBar, scrolledDown && props.classes.navBarOnScroll)}>
        <Container style={{ height: '100%' }}>
          <Toolbar 
          variant="dense" 
          className={clsx(props.classes.toolBar)}>
            <Logo classes={props.classes} />
            <div className={props.classes.navLinks}>
              {props.links.map((link, index) => (
                <Typography
                  className={props.classes.navLinkHeading}
                  component="h2"
                  variant="button"
                  align="right"
                  noWrap
                  key={index}
                >
                  <Link 
                    to={link.path} 
                    className={clsx(props.classes.navLink, scrolledDown && props.classes.navLinkScroll)}
                  >
                    {link.text}                            
                  </Link>
                </Typography>
              ))}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
  )
}

export default DesktopNav