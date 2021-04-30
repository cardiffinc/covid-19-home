import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';
import Lottie from 'react-lottie';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#1E18A1',
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    overflow: 'hidden'
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  squareTile: {
    background: '#2437C4',
    margin: 10,
    borderRadius: 25
  }
}));

function SingleLineGrid() {
  const classes = useStyles();
  const defaultLottieConfig = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={4}>
        {tileData.map((tile, pos) => (
          <>
            <Tooltip title={tile.title}>
            <GridListTile key={pos} className={classes.squareTile}>
              <Lottie 
                options={{...defaultLottieConfig, animationData: tile.lottie}}
                height={100}
                width={100}/>
              
            </GridListTile>
            </Tooltip>
          </>
        ))}
      </GridList>
    </div>
  );
}

export default SingleLineGrid;