/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';

function Images() {
  const images = [
    {
      original: 'https://placekitten.com/1024/768?image=1',
      thumbnail: 'https://placekitten.com/80/60?image=1',
      width: '1024',
      height: '768',
    }, {
      original: 'https://placekitten.com/1024/768?image=2',
      thumbnail: 'https://placekitten.com/80/60?image=2',
      width: '1024',
      height: '768',
    }, {
      original: 'https://placekitten.com/200/300',
      thumbnail: 'https://placekitten.com/20/30',
      width: '1024',
      height: '768',
    },
  ];

  return (
    <Gallery>
      {images.map((image) => (
        <Item
          original={image.original}
          thumbnail={image.thumbnail}
          width={image.width}
          height={image.height}
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src={image.original}
              alt=""
            />
          )}
        </Item>
      ))}
    </Gallery>
  );
}

export default Images;
