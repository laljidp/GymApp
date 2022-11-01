import React from 'react'
import { makeStyles } from '@mui/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles({
  floatingButton: {
    right: '25px',
    bottom: '25px',
    position: 'fixed'
  }
});

const FloatingButton = (props) => {
  const { handleClick } = props
  const classes = useStyles();
  return (
    <div className={classes.floatingButton}>
      <Fab size="small" color="primary" aria-label="add" onClick={handleClick}>
        <AddIcon />
      </Fab>
    </div>
  )
}

export default FloatingButton
