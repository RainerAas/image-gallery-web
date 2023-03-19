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
import Lightbox from 'yet-another-react-lightbox';
import ImagesListItem from './images-list-item';
// eslint-disable-next-line import/no-unresolved
import 'yet-another-react-lightbox/styles.css'; // TODO: Fix and import styles only that are needed (make custom style)

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
  const [lightboxState, setLightboxState] = useState({ index: 0, open: false });

  const isSuccessful = useMemo(() => status === 'success', [status]);
  const isErrored = useMemo(() => status === 'error', [status]);

  const clearStatus = useCallback(() => setStatus(false), []);

  const openLightbox = useCallback((index) => setLightboxState({ index, open: true }), []);
  const closeLightbox = useCallback(() => setLightboxState({ index: 0, open: false }), []);

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
    <>
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
        {images.map((image, index) => (
          <ImageListItem key={image._id}>
            <ImagesListItem
              index={index}
              id={image._id}
              name={image.imageName}
              src={image.src}
              placeholder={image.placeholder}
              height={image.height}
              width={image.width}
              onDelete={onDelete}
              onClick={openLightbox}
            />
          </ImageListItem>
        ))}
        <Snackbar open={isSuccessful} autoHideDuration={4000} onClose={clearStatus}>
          <Alert variant="filled" severity="success" sx={{ width: '100%', color: 'white' }} onClose={clearStatus}>
            Deletion successful
          </Alert>
        </Snackbar>
        <Snackbar open={isErrored} autoHideDuration={4000} onClose={clearStatus}>
          <Alert variant="filled" severity="error" sx={{ width: '100%' }} onClose={clearStatus}>
            Something went wrong with deleting
          </Alert>
        </Snackbar>
      </ImageList>
      <Lightbox
        open={lightboxState.open}
        index={lightboxState.index}
        close={closeLightbox}
        slides={images}
      />
    </>
  );
}

ImagesListComponent.propTypes = propTypes;

export default ImagesListComponent;
