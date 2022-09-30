import React from "react";
import { useQuery } from "react-apollo";
import { useParams } from "react-router";
import Avatar from '@mui/material/Avatar';
import { fetchCompanyByID } from "../../client-graphql/Queries/companies.query";
import ViewLoader from "../UI/ViewLoader";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import moment from 'moment'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ViewCompanyInfo = () => {

  const params = useParams()

  const { error, loading, data = {} } = useQuery(fetchCompanyByID, {
    variables: {
      id: params?.id
    }
  })

  const { company = {} } = data

  console.log('data', data)
  console.log('error', error)

  if (loading)
    return (
      <ViewLoader />
    )

  return (
    <Container disableGutters sx={{ padding: '2rem 1rem' }}>
      <div>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
        <h3>{company?.name}</h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <h4>Display Name</h4>
                <p>{company.displayName}</p>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <h4>Owner Name</h4>
                <p>{company?.ownerName}</p>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <h4>Owner Email</h4>
                <p>{company?.ownerEmail || 'N/A'}</p>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <h4>Regular monthly fees</h4>
                <p>{company?.regular_fees} ₹</p>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <h4>Owner Phone number</h4>
                <p>{company?.ownerPhoneNumber || 'N/A'}</p>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <h4>Created on</h4>
                <p>{moment(Number(company?.createdAt)).format('LL')}</p>
              </Item>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  )

}

export default ViewCompanyInfo