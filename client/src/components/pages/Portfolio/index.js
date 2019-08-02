import React, { useEffect } from 'react'

import axios from 'axios'

import { Box } from '@material-ui/core'

import ProjectsGrid from './ProjectsGrid'

// import useStyles from './styles'

export default props => {

  useEffect(() => {
    axios
      .get('/api/portfolio')
      .then(data => {
        console.log(data.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <Box pt={{ xs: 10, sm: '120px' }}>
      <ProjectsGrid />
    </Box>
  )
}
