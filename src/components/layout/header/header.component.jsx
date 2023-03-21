import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleDrawerToggle = useCallback(() => setMobileNavOpen((prev) => !prev), []);

  const renderDrawer = useCallback(() => (
    <Box component="nav" onClick={handleDrawerToggle} sx={{ textAlign: 'center', mt: '5rem' }}>
      <List>
        {Object.values(routes).map((route) => (
          <ListItem key={route.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={route.path}>
              <ListItemText primary={route.label.toUpperCase()} sx={{ fontSize: '2rem' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  ), [handleDrawerToggle]);

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box component="nav" sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {Object.values(routes).map((route) => (
              <Button
                component={Link}
                key={route.label}
                to={route.path}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontSize: '1rem',
                }}
              >
                {route.label}
              </Button>
            ))}
          </Box>

          <Drawer
            open={mobileNavOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '50%' },
            }}
          >
            {renderDrawer()}
          </Drawer>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
