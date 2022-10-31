import * as React from 'react';
import { useHistory } from 'react-router-dom'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FitnessCenterTwoToneIcon from '@mui/icons-material/FitnessCenterTwoTone';
import { URLS } from '../../constants/UrlsConfig';
import PeopleIcon from '@mui/icons-material/People';

const MENU_ITEMS = [
  { title: "Home", name: 'home', url: URLS.homePage, Icon:  <DashboardOutlinedIcon />},
  { title: "Companies", name: 'companies', url: URLS.companiesListing, Icon:  <FitnessCenterTwoToneIcon />},
  { title: "Users", name: 'users', url: URLS.usersPage, Icon:  <PeopleIcon />}

]

export default function DrawerMenu({ open, toggleDrawer }) {
  
  const history = useHistory()

  const redirectToURL = (url) => {
    history.push(url)
  }
  
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() =>toggleDrawer(false)}
    >
      <List>
        {MENU_ITEMS.map((menu, index) => (
          <ListItem key={menu.name} disablePadding>
            <ListItemButton onClick={() => redirectToURL(menu.url)}>
              <ListItemIcon>
                {menu.Icon}
              </ListItemIcon>
              <ListItemText primary={menu.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor={'left'}
        open={open}
        onClose={() => toggleDrawer(false)}
      >
        {list('left')}
      </Drawer>
    </div>
  );
}
