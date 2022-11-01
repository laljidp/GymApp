import React from "react";
import { Divider } from "@mui/material";
import { Container } from "@mui/system";
import { useHistory } from "react-router";
import PageHeading from "../UI/GoBack";

const AddEditUser = () => {

  const history = useHistory()

  return (
    <Container disableGutters>
      <PageHeading title={'Add User'} onBackClick={history.goBack} />
      <Divider />
    </Container>
  )
}

export default AddEditUser