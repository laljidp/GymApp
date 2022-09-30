import React, { useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@mui/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LogoImage from '../../assets/images/gymnasium-logo.jpg'
import { useHistory } from 'react-router';
import { URLS } from '../../constants/UrlsConfig';
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


const LoginForm = () => {

  const [payload, setPayload] = useState({
    username: '',
    password: ''
  })
  const history = useHistory()
  const [toast, setToast] = useState({ show: false, message: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})
  const classes = useStyles()

  const handleChange = ({ target }) => {
    const { name, value } = target
    setPayload({
      ...payload,
      [name]: value
    })
  }

  const hideToast = () => {
    setToast({
      show: false,
      message: ''
    })
  }

  const checkUsername = () => {
    let isValid = true
    if (!payload.username) {
      setError({
        ...error,
        username: 'Please enter email'
      })
      isValid = false
    } else {
      setError({
        ...error,
        email: null
      })
    }
    return isValid
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    if (!checkUsername()) {
      return;
    }
    console.log('Received values of form: ', payload)
    axios.post('http://localhost:4000/auth/login', payload)
      .then((res, err) => {
        console.log('res', res)
        console.log('err', err)
        if (res.data.token) {
          window.localStorage.setItem('Token', res.data.token)
          history.push(URLS.homePage)
        } else {
          setToast({
            show: true,
            message: 'Invalid Credentials!'
          })
          console.error('Login failed..')
          // show snackbar
        }
        setLoading(false)
      })
      .catch(err => {
        console.log('err', err)
        setToast({
          show: true,
          message: 'Invalid Credentials!'
        })
        setLoading(false)
        // show snackbar

      })
  };

  return (
    <div className='login-container'>
      <div className='login-div'>
        <Box
          component="form"
          sx={{
            padding: '10px',
            margin: '50% 0'
          }}
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <div class={classes.logoDiv}>
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
            error={!!error?.username}
            color="secondary"
            helperText={error?.username}
            variant="outlined"
            onChange={handleChange}
            name="username"
            type="username"
            value={payload.username}
            sx={{ marginBottom: '1.5rem' }}
          />
          <TextField
            className={classes.inputControl}
            fullWidth
            size="small"
            id="outlined-basic"
            label="Password *"
            error={!!error?.name}
            color="secondary"
            helperText={error?.name}
            variant="outlined"
            onChange={handleChange}
            name="password"
            type='password'
            sx={{ marginBottom: '1.5rem' }}
            value={payload.password}
          />
          <div sx={{ display: 'grid' }}>
            <LoadingButton
              loading={loading}
              loadingPosition="end"
              color='secondary'
              variant="outlined"
              type='submit'
              fullWidth
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
