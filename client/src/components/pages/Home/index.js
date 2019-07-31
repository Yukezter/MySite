import React, { useEffect } from 'react'

import axios from 'axios'

import Landing from './Landing'
import About from './About'
import Skills from './Skills'

// import useStyles from './styles'

export default props => {

  useEffect(() => {

    axios
      .get('/home')
      .then(data => {
        console.log(data.data)
      })
      .catch(error => console.log(error))

  })

  return (
    <React.Fragment>
      <Landing />
      <About />
      <Skills />
    </React.Fragment>
  )
}