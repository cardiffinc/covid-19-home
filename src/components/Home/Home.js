import { AppBar, Button, Grid, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import Lottie from 'react-lottie';
import SingleLineGrid from '../SingleLineGrid/SingleLineGrid';
import CovidAnimation from '../../lottie/CovidAnimations.json'

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
  templateHeading:{
    textTransform: 'uppercase',
    fontSize: 60,
    marginTop: '2.5em!important',
    marginBottom: '0em!important'
  },
  templateSubTitle: {
    fontSize: 35,
    fontWeight: 'lighter',
    marginTop: '0em!important',
    marginBottom: '0em!important',
  },
  templateParagraph:{
    marginBottom: '3em!important',
    fontSize: 12
  },
  lottieHolder:{
    marginTop: '4em!important'
  },
  templateInfoTitle: {
    fontSize: 'small',
    color: '#fff',
    textTransform: 'uppercase',
    width: 'fit-content',
    marginLeft: 10,
  },
  homeGrid:{
    height: '60vh'
  },
  homeGridBody: {
    height: 'inherit',
    textAlign: 'start',
    color: '#fff',
  },
  homeGridContent:{
    marginLeft: 20
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
  squareInfo:{
    height: 125,
    width: 125
  }
}));

function Home() {
  const classes = useStyles();
  const defaultLottieConfig = {
    loop: true,
    autoplay: true,
    animationData: CovidAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar/>
      </AppBar>
      <Grid container spacing={3} className={classes.homeGrid}>
        <Grid item xs={6} className={classes.homeGridBody}>
            <div className={classes.homeGridContent}>
              <h1 className={classes.templateHeading}>Corona</h1>
              <h2 className={classes.templateSubTitle}>Virus Disease (COVID-19)</h2>
              <p className={classes.templateParagraph}>
              Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.<br/>
              Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.              </p>
              <Button className={classes.mainButton}>Read More</Button>
            </div>
        </Grid>
        <Grid item xs={6} className={classes.homeGridBody}>
          <div className={classes.lottieHolder}>
            <Lottie 
              options={defaultLottieConfig}
              height={400}
              width={600}/>
          </div>
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
                      <h4 className={classes.templateInfoTitle}>Prevention</h4>
                      <SingleLineGrid/>
                    </Grid>
              </Grid>
          </Grid>
      </Grid>
      
   </div>
  )
}

export default Home
