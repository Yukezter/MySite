import React from 'react'

import { GridList, GridListTile, GridListTileBar, Container, Link } from '@material-ui/core'
import projects from './projects'

import useStyles from './styles'

export default props => {
  const classes = useStyles()

  return (
    <section>
      <Container>
        <div className={classes.root}>
          <GridList cellHeight={'auto'} spacing={1} className={classes.gridList}>
            {projects.map(tile => (
              <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1} >
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
