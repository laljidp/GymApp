import React from "react";
import { makeStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles({
  loadingPosition: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh'
  }
});

const PageLoader = () => {
  const classes = useStyles();
  return (
    <div className={classes.loadingPosition}>
      <CircularProgress disableShrink />
    </div>
  )
}

export default PageLoader