import { useCallback } from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const propTypes = {
  id: PropTypes.string,
  fileName: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
};

const defaultProps = {
  id: undefined,
  fileName: undefined,
  message: undefined,
  onClose: undefined,
};

function ImageUploaderError(props) {
  const {
    id,
    fileName,
    message,
    onClose,
  } = props;

  const close = useCallback(() => typeof onClose === 'function' && onClose(id), [id, onClose]);

  return (
    <Alert variant="filled" severity="error" onClose={close}>
      <AlertTitle>
        Error
      </AlertTitle>
      {`${fileName} - ${message}`}
    </Alert>
  );
}

ImageUploaderError.propTypes = propTypes;
ImageUploaderError.defaultProps = defaultProps;

export default ImageUploaderError;
