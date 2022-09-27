import { Alert, Container } from "@mui/material";
import React from "react";
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
  inputControl: {
    marginBottom: '15px'
  }
})

const AddCompany = () => {

  const classes = useStyles()

  return (
    <Container maxWidth={'sm'} disableGutters>
      <Alert severity="info"><b>Add Company</b></Alert>
      <Box
        component="form"
        sx={{
          padding: '10px'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField className={classes.inputControl} fullWidth size="small" id="outlined-basic" label="Name *" variant="outlined" name="name" />
        <TextField className={classes.inputControl} fullWidth size="small" id="outlined-basic" label="Display Name *" variant="outlined" name="displayName" />
      </Box>
    </Container>
  )
}

export default AddCompany