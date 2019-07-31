import React, { useEffect } from 'react'

import axios from 'axios'

import { Box, Typography } from '@material-ui/core'

// import useStyles from './styles'

export default props => {

  useEffect(() => {

    axios
      .get('/blog')
      .then(data => {
        console.log(data.data)
      })
      .catch(error => console.log(error))

  })

  return (
    <Box pt={{ xs: 8, sm: '120px' }}>
      <Typography
        component="h5"
        variant="h6"
        align="center"
      >
      Coming soon!...
      </Typography>
    </Box>
  )
}