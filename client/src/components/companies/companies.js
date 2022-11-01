import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { fetchCompanies } from '../../client-graphql/Queries/companies.query'
import { Container } from '@mui/material';
import CompanyLists from './CompanyLists';
import { useHistory } from 'react-router';
import { URLS } from '../../constants/UrlsConfig';
import PageLoader from '../UI/PageLoader';
import FloatingButton from '../UI/Button/FloatingButton';

const Companies = (props) => {

  const { error, loading, data = [] } = useQuery(fetchCompanies, {
    variables: {
      limit: 25,
      skip: 0
    }
  })
  const history = useHistory();

  const handleClick = () => {
    history.push(URLS.addCompany)
  }

  const handleRedirection = (id) => {
    history.push(`${URLS.companiesListing}/${id}`)
  }

  if (error) {
    console.log('err', error)
  }

  if (loading)
    return (
      <PageLoader />
    )


  return (
    <Container maxWidth="false" disableGutters>
      <CompanyLists handleRedirection={handleRedirection} companies={data?.companies || []} />
      <FloatingButton handleClick={handleClick} />
    </Container>
  )
}


export default Companies
