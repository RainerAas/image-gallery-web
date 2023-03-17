import {
  useCallback,
  useState,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import api from 'api';
import {
  ImageList,
  ImageListItem,
  Snackbar,
  Alert,
} from '@mui/material';
import ImagesListItem from './images-list-item';

const propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    imageName: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  })).isRequired,
  onImageDelete: PropTypes.func.isRequired,
};

function ImagesListComponent(props) {
  const { images, onImageDelete } = props;

  const [status, setStatus] = useState();

  const isSuccessful = useMemo(() => status === 'success', [status]);
  const isErrored = useMemo(() => status === 'error', [status]);

  const onStatusClear = useCallback(() => setStatus(false), []);

  const onDelete = useCallback(async (id) => {
    try {
      await api.delete({ url: `/images/${id}` });
      onImageDelete(id);
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  }, [onImageDelete]);

  return (
    <ImageList
      gap={6}
      variant="masonry"
      sx={{
        columnCount: {
          xs: '1 !important',
          sm: '2 !important',
          md: '3 !important',
          lg: '4 !important',
          xl: '5 !important',
        },
      }}
    >
      {images.map((image) => (
        <ImageListItem key={image._id}>
          <ImagesListItem
            id={image._id}
            name={image.imageName}
            src={image.src}
            placeholder={image.placeholder}
            height={image.height}
            width={image.width}
            onDelete={onDelete}
          />
        </ImageListItem>
      ))}
      <Snackbar open={isSuccessful} autoHideDuration={4000} onClose={onStatusClear}>
        <Alert variant="filled" severity="success" sx={{ width: '100%', color: 'white' }} onClose={onStatusClear}>
          Deletion successful
        </Alert>
      </Snackbar>
      <Snackbar open={isErrored} autoHideDuration={4000} onClose={onStatusClear}>
        <Alert variant="filled" severity="error" sx={{ width: '100%' }} onClose={onStatusClear}>
          Something went wrong with deleting
        </Alert>
      </Snackbar>
    </ImageList>
  );
}

ImagesListComponent.propTypes = propTypes;

export default ImagesListComponent;
