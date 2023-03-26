import { useCallback } from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import ImageUploaderError from './image-uploader-error';

const propTypes = {
  errors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    fileName: PropTypes.string,
    message: PropTypes.string,
  })),
  onErrorClose: PropTypes.func,
};

const defaultProps = {
  errors: undefined,
  onErrorClose: undefined,
};

function ImageUploaderErrorList(props) {
  const { errors, onErrorClose } = props;

  const getErrorMessage = useCallback((message) => {
    if (message === 'Unsupported file type') {
      return 'Unsupported file type';
    }

    if (message.includes('Image too large')) {
      return 'Image too large, maximum allowed size is 10 MB';
    }

    return 'Something went wrong';
  }, []);

  return (
    <Stack spacing={2} sx={{ mt: '1rem', width: '100%' }}>
      {errors.map((error) => (
        <ImageUploaderError
          key={error.id}
          id={error.id}
          fileName={error.fileName}
          message={getErrorMessage(error.message)}
          onClose={onErrorClose}
        />
      ))}
    </Stack>
  );
}

ImageUploaderErrorList.propTypes = propTypes;
ImageUploaderErrorList.defaultProps = defaultProps;

export default ImageUploaderErrorList;
