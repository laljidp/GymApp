import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { fetchCompanies } from '../../client-graphql/Queries/companies.query'
import CircularProgress from '@mui/material/CircularProgress';
import { Container } from '@mui/material';
import CompanyLists from './CompanyLists';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router';
import { URLS } from '../../constants/UrlsConfig';

const useStyles = makeStyles({
  floatingButton: {
    right: '25px',
    bottom: '25px',
    position: 'fixed'
  },
});

const Companies = (props) => {

  const { error, loading, data = [] } = useQuery(fetchCompanies, {
    variables: {
      limit: 25,
      skip: 0
    }
  })
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(URLS.addCompany)
  }

  if (error) {
    console.log('err', error)
  }

  if (loading)
    return (
      <CircularProgress disableShrink />
    )


  return (
    <Container maxWidth="false" disableGutters>
      <CompanyLists companies={data?.gym_companies || []} />
      <div className={classes.floatingButton}>
        <Fab size="small" color="primary" aria-label="add" onClick={handleClick}>
          <AddIcon />
        </Fab>
      </div>
    </Container>
  )
}


export default Companies
