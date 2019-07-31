import React from 'react'

import { 
  GridList, GridListTile, GridListTileBar, 
  Container, Link, useTheme, useMediaQuery } from '@material-ui/core'

import projects from './projects'

import useStyles from './styles'

export default props => {

  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <section>
      <Container>
        <div className={classes.root}>
          <GridList cellHeight={'auto'} spacing={3} className={classes.gridList}>
            {projects.map(tile => (
              <GridListTile key={tile.img} cols={matches ? 1 : 2} rows={matches ? 1 : 2} >
                <Link href={tile.link} target="_blank">
                  <img src={tile.img} alt={tile.title} className={classes.tileImg} />
                  <GridListTileBar
                    title={tile.title}
                    titlePosition="top"
                    className={classes.titleBar}
                  />
                </Link>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Container>
    </section>
  )
}
