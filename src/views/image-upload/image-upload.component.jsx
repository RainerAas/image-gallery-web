import { Typography, Container, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ImageUploader from './image-uploader';

function ImageUpload() {
  const theme = useTheme();

  return (
    <Container>
      <Box my={{ xs: 2, md: 3, lg: 5 }}>
        <Typography sx={{ typography: { md: 'h2', xs: 'h3' } }} component="h1" align="center" color={theme.palette.primary.contrastText} mb={1}>
          Upload your images
        </Typography>
        <Typography sx={{ typography: { md: 'body1', xs: 'body2' } }} align="center" color={theme.palette.primary.contrastText}>
          Supports PNG, JPG, JPEG and WebP
        </Typography>
      </Box>
      <ImageUploader />
    </Container>
  );
}

export default ImageUpload;
