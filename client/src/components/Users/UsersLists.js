import { Container } from "@mui/system";
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router";
import { URLS } from "../../constants/UrlsConfig";
import { ROLES_TITLE } from "../../constants/rolesConfig";


const UsersLists = (props) => {
  const { users } = props
  const history = useHistory()

  const handleRedirection = (userID) => {
    history.push(`${URLS.usersPage}/${userID}`)
  }

  return (
    <Container disableGutters>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {users.map((user) => (
          <React.Fragment key={user.id}>
            <ListItem alignItems="flex-start" onClick={() => handleRedirection(user.id)}>
              <ListItemAvatar>
                <Avatar alt={user?.name || 'N/A'} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={user?.name || 'N/A'}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {ROLES_TITLE[user?.role] || 'N/A'}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Container>
  )

}


export default UsersLists