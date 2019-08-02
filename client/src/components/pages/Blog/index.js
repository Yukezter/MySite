import React from 'react'
import axios from 'axios'

import { Box } from '@material-ui/core'

import BlogGrid from './BlogGrid'

// import useStyles from './styles'

export default class extends React.Component {

  componentDidMount() {

    setTimeout(() => {
      this.props.doneLoading()
    }, 2000)

    axios
      .get('/api/blog')
      .then(data => {
        console.log(data.data)
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <Box pt={{ xs: 10, sm: '120px' }}>
        <BlogGrid />
      </Box>
    )
  }
}