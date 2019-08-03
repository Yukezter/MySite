import React from 'react'

import axios from 'axios'

import { Box } from '@material-ui/core'

import ProjectsGrid from './ProjectsGrid'

// import useStyles from './styles'

import projects from './ProjectsGrid/projects'

export default class extends React.Component {

  state = { 
    imagesLoaded: 0
   }

  imageLoaded = () => {
    this.setState(prevState => ({ 
      imagesLoaded: prevState.imagesLoaded + 1 
    }), () => {
      if (projects.length === this.state.imagesLoaded) {
        setTimeout(() => {
          this.props.doneLoading()
        }, 2000)
      }
    })
  }

  componentDidMount() {
    axios
      .get('/api/portfolio')
      .then(data => {
        console.log(data.data)
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <Box pt={{ xs: 10, sm: '120px' }}>
        <ProjectsGrid imageLoaded={this.imageLoaded} />
      </Box>
    )
  }
}
