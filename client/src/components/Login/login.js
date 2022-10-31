import * as yup from "yup";
import React, { useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@mui/styles';
import { useFormik } from 'formik'
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LogoImage from '../../assets/images/gymnasium-logo.jpg'
import { useHistory } from 'react-router';
import { URLS } from '../../constants/UrlsConfig'
import { Snackbar } from '@mui/material';
import './login.scss'


const useStyles = makeStyles({
  inputControl: {
    marginBottom: '15px'
  },
  logoImg: {
    height: '145px',
    width: '250px',
    objectFit: 'cover'
  },
  logoDiv: {
    textAlign: 'center'
  }
})


const LoginForm = (props) => {

  const history = useHistory()
  const [toast, setToast] = useState({ show: false, message: '' })
  const [isProcessing, setIsProcessing] = useState(false)
  const {
    values,
    errors,
    handleSubmit,
    touched,
    handleChange,
  } = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    enableReinitialize: true,
    validationSchema: yup.object().shape({
      username: yup
        .string()
        .required("Username is Required!"),
      password: yup
        .string()
        .required("Enter your password!")
        .min(4, "Password must contain at least 4 characters!")
    }),
    onSubmit: (values) => {
      console.log('Received values of form: ', values)
      setIsProcessing(true)
      axios.post('http://localhost:4000/auth/login', values)
        .then((res, err) => {
          if (res.data.token) {
            window.localStorage.setItem('Token', res.data.token)
            history.push(URLS.homePage)
          } else {
            setToast({
              show: true,
              message: 'Invalid Credentials!'
            })
            setIsProcessing(false)
          }
        })
        .catch(err => {
          console.log('err on login request: ', err)
          setToast({
            show: true,
            message: 'Invalid Credentials!'
          })
          setIsProcessing(false)
        })
    }
  })
  const classes = useStyles()

  const hideToast = () => {
    setToast({
      show: false,
      message: ''
    })
  }

  return (
    <div className='login-container'>
      <div className='login-div'>
        <Box
          component="form"
          sx={{
            padding: '10px',
            margin: 'auto'
          }}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className={classes.logoDiv}>
            <img
              className={classes.logoImg}
              alt='my-logo'
              src={LogoImage}
            />
          </div>
          <TextField
            className={classes.inputControl}
            fullWidth
            size="small"
            id="outlined-basic"
            label="Username *"
            error={!!errors?.username && touched?.username}
            color="secondary"
            helperText={(touched?.username && !!errors?.username) ? errors?.username : ''}
            variant="outlined"
            onChange={handleChange}
            name="username"
            type="username"
            value={values?.username || ''}
            sx={{ marginBottom: '1.5rem' }}
          />
          <TextField
            className={classes.inputControl}
            fullWidth
            size="small"
            id="outlined-basic"
            label="Password *"
            error={!!errors?.password && !!touched?.password}
            color="secondary"
            helperText={(touched?.password && !!errors?.password) ? errors?.password : ''}
            variant="outlined"
            onChange={handleChange}
            name="password"
            type='password'
            sx={{ marginBottom: '1.5rem' }}
            value={values?.password || ''}
          />
          <div>
            <LoadingButton
              loading={isProcessing}
              loadingPosition="end"
              color='secondary'
              variant="outlined"
              type='submit'
              fullWidth
              endIcon={<span />}
              onClick={handleSubmit}
            >
              Login
            </LoadingButton>
          </div>
          <Snackbar
            open={toast.show}
            autoHideDuration={3000}
            onClose={hideToast}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            message={toast.message}
          />
        </Box>
      </div>
    </div>
  )
}

export default LoginForm
