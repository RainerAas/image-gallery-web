import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'components/image';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckIcon from '@mui/icons-material/Check';
import * as Styled from './images-list-item.styles';

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

function ImagesListItem(props) {
  const {
    id,
    name,
    src,
    placeholder,
    height,
    width,
    onDelete,
  } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [isHovering, setHovering] = useState(false);
  const [isConfirmation, setConfirmation] = useState(false);

  const onConfirm = useCallback(() => onDelete(id), [id, onDelete]);
  const onAttemptDelete = useCallback(() => {
    setConfirmation(true);

    if (isMobile) {
      setTimeout(() => {
        setConfirmation(false);
      }, 2000);
    }
  }, [isMobile]);

  const onMouseEnter = useCallback(() => setHovering(true), []);
  const onMouseLeave = useCallback(() => {
    setHovering(false);
    setConfirmation(false);
  }, []);

  return (
    <>
      <Image
        name={name}
        src={src}
        placeholder={placeholder}
        height={height}
        width={width}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <Styled.Button
        onClick={isConfirmation ? onConfirm : onAttemptDelete}
        visible={isHovering || isMobile}
        isConfirmation={isConfirmation}
        size="small"
      >
        {isConfirmation ? (
          <CheckIcon />
        ) : (
          <DeleteForeverIcon />
        )}
      </Styled.Button>
    </>
  );
}

ImagesListItem.propTypes = propTypes;

export default ImagesListItem;
