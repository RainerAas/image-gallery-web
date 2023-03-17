import {
  Typography,
  Box,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import * as Styled from './images-palceholder.styles';

function ImagesPlaceholder() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Styled.Container>
      <Box justifyContent="center" display="flex" flexDirection="column">
        <Typography sx={{ typography: { md: 'h2', xs: 'h3' } }} component="h1" align="center" color={theme.palette.primary.contrastText} mb={{ xs: 2, md: 3, lg: 5 }}>
          You have no uploads yet
        </Typography>
        <Button
          variant="outlined"
          onClick={() => navigate('/images/upload')}
          sx={{ display: 'block', alignSelf: 'center' }}
          size="large"
          color="info"
        >
          <Box component="span" display="flex" alignItems="center">
            Start uploading here
            <ArrowRightAltIcon />
          </Box>
        </Button>
      </Box>
    </Styled.Container>
  );
}

export default ImagesPlaceholder;
