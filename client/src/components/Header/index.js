import React from 'react'

import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

import useStyles from './styles'

const links = [
  {
    path: '/',
    text: 'Home'
  },
  {
    path: '/blog',
    text: 'Blog'

  },
  {
    path: '/portfolio',
    text: 'Portfolio'
  }
]

export default ({ isOpen, open, close }) => {

  const classes = useStyles()

  return (
    <React.Fragment>
      <DesktopNav
        classes={classes}
        links={links}
      />
      <MobileNav
        classes={classes}
        links={links} 
        isOpen={isOpen}
        open={open}
        close={close}
      />
    </React.Fragment>
  )
}
