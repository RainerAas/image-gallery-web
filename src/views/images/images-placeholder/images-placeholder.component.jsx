import PropTypes from 'prop-types';

import {
  Typography,
  Box,
  Button,
  Alert,
  AlertTitle,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import * as Styled from './images-palceholder.styles';

const propTypes = {
  errored: PropTypes.bool,
};

const defaultProps = {
  errored: false,
};

function ImagesPlaceholder(props) {
  const { errored } = props;

  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Styled.Container>
      <Box justifyContent="center" display="flex" flexDirection="column">
        {errored ? (
          <Alert variant="filled" severity="error">
            <AlertTitle>Error</AlertTitle>
            Something went wrong
          </Alert>
        ) : (
          <>
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
          </>
        )}
      </Box>
    </Styled.Container>
  );
}

ImagesPlaceholder.propTypes = propTypes;
ImagesPlaceholder.defaultProps = defaultProps;

export default ImagesPlaceholder;
