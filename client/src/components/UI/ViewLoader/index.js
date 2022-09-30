import React from "react";
import { makeStyles } from '@mui/styles';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const useStyles = makeStyles({
  loadingPosition: {
    height: '50vh'
  }
});

const ViewLoader = () => {
  const classes = useStyles();
  return (
    <div className={classes.loadingPosition}>
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={60} height={80} />
        <Skeleton variant="rectangular" height={60} />
        <Skeleton variant="rounded" height={60} />
        <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '4rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '5rem' }} />
        <Skeleton variant="rounded" height={80} />
        <Skeleton variant="rounded" height={250} />


      </Stack>
    </div>
  )
}

export default ViewLoader