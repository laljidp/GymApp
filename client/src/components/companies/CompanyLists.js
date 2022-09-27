import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function CompanyLists({ companies = [] }) {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {companies.map((comp) => (
        <React.Fragment key={comp.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={comp?.name || 'N/A'} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={comp?.name || 'N/A'}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {comp.ownerEmail || 'N/A'}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
}
