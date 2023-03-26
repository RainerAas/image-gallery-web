import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { ImageList, ImageListItem } from '@mui/material';
import Image from 'components/image';

const propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    src: PropTypes.string,
    placeholder: PropTypes.string,
  })),
};

const defaultProps = {
  images: undefined,
};

function ImagePreviewList(props) {
  const { images } = props;

  const renderPreviews = useCallback(() => images.map((image) => (
    <ImageListItem key={image._id}>
      <Image
        name={image.imageName}
        src={image.src}
        placeholder={image.placeholder}
        height={image.height}
        width={image.width}
      />
    </ImageListItem>
  )), [images]);

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
        },
      }}
    >
      {renderPreviews()}
    </ImageList>
  );
}

ImagePreviewList.propTypes = propTypes;
ImagePreviewList.defaultProps = defaultProps;

export default ImagePreviewList;
