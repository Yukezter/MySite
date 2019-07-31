import React from 'react'

import { Box, Container, Grid, Typography } from '@material-ui/core'

// import useStyles from './styles'

const posts = [
  {
    date: '01/01/2020',
    post: 'Post One',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius autem, aliquam voluptatem laboriosam nihil in recusandae totam facilis sequi provident nobis doloribus, ab perferendis minus nam.'
  },
  {
    date: '01/01/2020',
    post: 'Post Two',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius autem, aliquam voluptatem laboriosam nihil in recusandae totam facilis sequi provident nobis doloribus, ab perferendis minus nam.'
  },
  {
    date: '01/01/2020',
    post: 'Post Three',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius autem, aliquam voluptatem laboriosam nihil in recusandae totam facilis sequi provident nobis doloribus, ab perferendis minus nam.'
  },
  {
    date: '01/01/2020',
    post: 'Post Four',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius autem, aliquam voluptatem laboriosam nihil in recusandae totam facilis sequi provident nobis doloribus, ab perferendis minus nam.'
  },
  {
    date: '01/01/2020',
    post: 'Post Five',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius autem, aliquam voluptatem laboriosam nihil in recusandae totam facilis sequi provident nobis doloribus, ab perferendis minus nam.'
  },
  {
    date: '01/01/2020',
    post: 'Post Six',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius autem, aliquam voluptatem laboriosam nihil in recusandae totam facilis sequi provident nobis doloribus, ab perferendis minus nam.'
  },

]

export default props => {

  return (
    <section>
      <Container>
        <Box textAlign="center">
          <Typography
            component="h4"
            variant="h5"
          >
            Coming soon...
          </Typography>
        </Box>
      </Container>
    </section>
  )
}