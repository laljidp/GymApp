import { Container } from '@mui/system'
import React from 'react'
import { makeStyles } from '@mui/styles';
import NotFoundImage from '../../assets/images/404notFound.jpg'
import { Button } from '@mui/material';
import { useHistory } from 'react-router';
import { URLS } from '../../constants/UrlsConfig';

const useStyles = makeStyles({
  notFoundSection: {
    display: 'grid',
    justifyContent: 'center',
    paddingTop: '25%',
    '& img': {
      height: 250,
      width: 250
    }
  }
})

function NotFound(props) {
  const history = useHistory()

  const redirectToHome = () => {
    history.push(URLS.homePage)
  }

  const classes = useStyles()
  return (
    <Container>
      <div className={classes.notFoundSection}>
        <img alt='not-found' src={NotFoundImage} />
        <Button onClick={redirectToHome} variant="outlined" size="small">
          Back home
        </Button>
      </div>
    </Container>
  )
}

export default NotFound
