import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import React from "react";
import { blue } from '@mui/material/colors'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const useStyles = makeStyles({
  section: {
    display: 'flex',
    '& h3': {
      color: blue[500],
      fontWeight: 'bold'
    }
  }
})

const PageHeading = ({ title, onBackClick }) => {
  const classes = useStyles()
  return (
    <Container disableGutters>
      <div className={classes.section}>
        <Button onClick={onBackClick}><ArrowBackIosIcon /></Button>
        <h3>{title}</h3>
      </div>
    </Container>
  )
}

export default PageHeading