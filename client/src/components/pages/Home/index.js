import React from 'react'

import axios from 'axios'

import Landing from './Landing'
import About from './About'
import Skills from './Skills'

// import useStyles from './styles'

export default class extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.doneLoading()
    }, 2000)

    axios
      .get('/api/home')
      .then(data => {
        console.log(data.data)
      })
      .catch(error => console.log(error))
  }

  componentWillUnmount() {
    this.props.loading()
    if (this.props.isOpen) {
      this.props.close()
    }
  }

  render() {
    return (
      <React.Fragment>
        <Landing />
        <About />
        <Skills />
      </React.Fragment>
    )
  }
}