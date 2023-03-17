import { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './image.styles';

const propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

const defaultProps = {
  onMouseEnter: undefined,
  onMouseLeave: undefined,
};

function Image(props) {
  const {
    name,
    src,
    placeholder,
    height,
    width,
    onMouseEnter,
    onMouseLeave,
  } = props;

  const [loading, setLoading] = useState(true);
  const [showBlur, setShowBlur] = useState(true);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setShowBlur(false);
      }, 500);
    }
  }, [loading]);

  const onLoad = useCallback(() => setLoading(false), []);

  return (
    <>
      <Styled.Image
        loading="lazy"
        width={width}
        height={height}
        title={name}
        alt={name}
        src={src}
        onLoad={onLoad}
        hasLoaded={!loading}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      {showBlur && (
        <Styled.BlurImage
          hash={placeholder}
          width={width}
          height={height}
        />
      )}
    </>
  );
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
