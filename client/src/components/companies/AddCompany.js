import { Alert, Button, Container } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { createCompany } from "../../client-graphql/Queries/companies.query";
import { useHistory } from "react-router";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { URLS } from "../../constants/UrlsConfig";

const MyAlert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles({
  inputControl: {
    marginBottom: '15px'
  },
  actionSection: {
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'flex-end',
    '& button': {
      marginLeft: '10px'
    }

  }
})

const AddCompany = () => {

  const [payload, setPayload] = useState({
    name: '',
    displayName: '',
    address: '',
    description: '',
    logoUrl: null,
    ownerEmail: '',
    ownerName: '',
    regular_fees: '',
    ownerPhoneNumber: '',
    smallLogoUrl: null,
  })
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [loading, setLoading] = useState(false)
  const classes = useStyles()
  const history = useHistory()
  const [error, setError] = useState({})
  const [createGymCompany] = useMutation(createCompany, {
    variables: {
      company: {
        ...payload,
        regular_fees: Number(payload.regular_fees)
      }
    },
    // to observe what the mutation response returns
    onCompleted: data => {
      console.log('created company data', data);
      setLoading(false)
      history.push(URLS.companiesListing)
    },
    onError: err => {
      console.log('Error while creating company', err)
      setLoading(false)
    }
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setShowSnackbar(false);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target
    setPayload({
      ...payload,
      [name]: value
    })
  }

  const checkValidation = () => {
    let isValid = true;
    const error = {}
    if (!payload.name.trim()) {
      isValid = false;
      error.name = 'Name is required!'
    }
    if (!payload.displayName.trim()) {
      isValid = false;
      error.displayName = 'Display name is required!'
    }
    if (!payload.ownerName.trim()) {
      isValid = false;
      error.ownerName = 'Owner name is required!'
    }
    if (!payload.regular_fees) {
      isValid = false;
      error.regular_fees = 'Regular fees field is required!'
    }
    setError(error)
    return isValid;
  }

  const handleSave = () => {
    // check  validation
    if (!checkValidation()) {
        setShowSnackbar(true)
        return;
    }
    setLoading(true)
    // call the create company mutation
    createGymCompany()
  }

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
        <TextField
          className={classes.inputControl}
          fullWidth
          size="small"
          id="outlined-basic"
          label="Name *"
          error={!!error?.name}
          helperText={error?.name}
          variant="outlined"
          onChange={handleChange}
          name="name"
          value={payload.name}
        />
        <TextField
          className={classes.inputControl}
          fullWidth
          size="small"
          error={!!error?.displayName}
          helperText={error?.displayName}
          id="outlined-basic"
          label="Display Name *"
          variant="outlined"
          name="displayName"
          onChange={handleChange}
          value={payload.displayName}
        />
        <TextField
          className={classes.inputControl}
          fullWidth
          size="small"
          id="outlined-basic"
          label="Owner Name *"
          error={!!error?.ownerName}
          helperText={error?.ownerName}
          variant="outlined"
          onChange={handleChange}
          name="ownerName"
          value={payload.ownerName}
        />
        <TextField
          className={classes.inputControl}
          fullWidth
          size="small"
          id="outlined-basic"
          label="Owner Email"
          variant="outlined"
          value={payload.ownerEmail}
          name="ownerEmail"
          onChange={handleChange}
        />
        <TextField
          className={classes.inputControl}
          fullWidth
          size="small"
          type={'number'}
          id="outlined-basic"
          error={!!error?.regular_fees}
          helperText={error?.regular_fees}
          label="Regular Monthly Fees *"
          variant="outlined"
          value={payload.regular_fees}
          name="regular_fees"
          onChange={handleChange}
        />

        <TextField
          className={classes.inputControl}
          fullWidth
          size="small"
          id="outlined-basic"
          value={payload.ownerPhoneNumber}
          label="Owner PhoneNumber"
          variant="outlined"
          name="ownerPhoneNumber"
          onChange={handleChange}
        />
        <TextField
          id="outlined-multiline-static"
          label="Address"
          multiline
          value={payload.address}
          rows={4}
          name='address'
          size="small"
          fullWidth
          onChange={handleChange}
        />
        <div className={classes.actionSection}>
          <Button onClick={history.goBack} variant="outlined" size="small">
            Cancel
          </Button>
          <LoadingButton
            size="small"
            color="secondary"
            onClick={handleSave}
            loading={loading}
            loadingPosition="end"
            endIcon={<SaveIcon />}
            variant="contained"
          >
            Save
          </LoadingButton>
        </div>
        <Snackbar open={showSnackbar} autoHideDuration={5000} onClose={handleClose}>
          <MyAlert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Please fill the required field!
          </MyAlert>
          </Snackbar>
      </Box>
    </Container>
  )
}

export default AddCompany