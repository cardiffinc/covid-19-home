import { AppBar, Button, Grid, IconButton, makeStyles, Paper, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import React from 'react'
import SingleLineGrid from '../SingleLineGrid/SingleLineGrid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar:{
    boxShadow: 'none',
    background: '#1E18A1'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: '#fff',
    height: '-webkit-fill-available',
    background: 'none'
  },
  homeGrid:{
    height: '60vh'
  },
  homeGridBody: {
    height: 'inherit'
  },
  mainButton:{
    background: '#fff',
    color: '#000',
    borderRadius: 25,
    paddingLeft: 25,
    paddingRight: 25,
    textTransform: 'initial',
    fontWeight: 'bold',
  },
  infoGrid:{
    
  },
  squareInfo:{
    height: 125,
    width: 125
  }
}));

function Home() {
  const classes = useStyles();
  const twelve = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} className={classes.homeGrid}>
        <Grid item xs={6} className={classes.homeGridBody}>
            <h1>Corona</h1>
            <h2>Virus Disease (COVID-19)</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu volutpat quam. Nunc vitae mollis libero. Sed vitae blandit massa. Suspendisse fermentum libero non neque viverra consectetur. Fusce justo tellus, ullamcorper et hendrerit in, semper et quam. Sed commodo arcu a viverra volutpat. Maecenas ultrices semper sollicitudin. Maecenas tempus fermentum quam dictum tempor. Sed blandit orci imperdiet mauris euismod, ac vulputate nulla efficitur. Vestibulum accumsan nisi ipsum, id pretium erat hendrerit vitae. Donec a augue erat. Proin orci nunc, vestibulum eu justo vel, accumsan aliquam felis.
            </p>
            <Button className={classes.mainButton}>Read More</Button>
        </Grid>
        <Grid item xs={6} className={classes.homeGridBody}>
        </Grid>
      </Grid>
      <Grid>
          <Grid item xs={12} className={classes.infoGrid}>
              <Grid 
                container 
                spacing={2}
                direction="row"
                justify="space-between">
                    <Grid item xs={6}> 
                        
                    </Grid>
                    <Grid item xs={6}> 
                      <h4>Prevention</h4>
                      <SingleLineGrid/>
                    </Grid>
              </Grid>
          </Grid>
      </Grid>
      
   </div>
  )
}

export default Home
