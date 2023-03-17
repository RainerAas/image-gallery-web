import { useNavigate } from 'react-router-dom';
import routes from 'routes';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ display: 'flex' }}>
            {Object.values(routes).map((route) => (
              <Button
                variant="string"
                key={route.label}
                onClick={() => navigate(route.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {route.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
