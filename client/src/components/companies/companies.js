import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { fetchCompanies } from '../../client-graphql/Queries/companies.query'
import CircularProgress from '@mui/material/CircularProgress';
import { Container } from '@mui/material';
import CompanyLists from './CompanyLists';

const Companies = (props) => {

    const { error, loading, data = [] } = useQuery(fetchCompanies, {
        variables: {
            limit: 25,
            skip: 0
        }
    })

    if(error) {
        console.log('err', error)
    }

    if (loading)
        return (
            <CircularProgress disableShrink />
        )


    return (
        <Container maxWidth="sm">
            <CompanyLists companies={data?.gym_companies || []} />
        </Container>
    )
}


export default Companies
