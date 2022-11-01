import { Container } from "@mui/material";
import React from "react";
import { useQuery } from "react-apollo";
import { useHistory } from "react-router";
import { fetchUsers } from "../../client-graphql/Queries/users.query";
import { URLS } from "../../constants/UrlsConfig";
import FloatingButton from "../UI/Button/FloatingButton";
import PageLoader from "../UI/PageLoader";
import UsersLists from "./UsersLists";

const Users = () => {

  const history = useHistory()
  const { error, loading, data = [] } = useQuery(fetchUsers, {
    variables: {
      limit: 25,
      skip: 0
    }
  })
  console.log('error', error)

  const handleRedirection = () => {
    history.push(URLS.addUserPage)
  }

  if (loading)
    return <PageLoader />

  return (
    <Container disableGutters>      
      <UsersLists users={data.users || []} />
      <FloatingButton handleClick={handleRedirection} />
    </Container>
  )
}

export default Users