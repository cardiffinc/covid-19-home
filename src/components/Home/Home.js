import { AppBar, Button, Grid, IconButton, makeStyles, Paper, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 'inherit'
  },
  homeGrid:{
    height: '60vh'
  },
  homeGridBody: {
    height: 'inherit'
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} className={classes.homeGrid}>
        <Grid item xs={6} className={classes.homeGridBody}>
          <Paper className={classes.paper}>
            <h1>Corona</h1>
            <h2>Virus Disease (COVID-19)</h2>
          </Paper>
        </Grid>
        <Grid item xs={6} className={classes.homeGridBody}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
