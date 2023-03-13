import { useState } from 'react';
import Lightbox from 'react-spring-lightbox';

function Images() {
  const images = [
    {
      src: 'https://placekitten.com/1024/768?image=1',
      loading: 'lazy',
      alt: '',
    }, {
      src: 'https://placekitten.com/1024/768?image=2',
      loading: 'lazy',
      alt: '',
    }, {
      src: 'https://placekitten.com/200/300',
      loading: 'lazy',
      alt: '',
    },
  ];

  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);

  const gotoPrevious = () => currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);
  const gotoNext = () => (
    currentImageIndex + 1 < images.length && setCurrentIndex(currentImageIndex + 1)
  );

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>Open</button>
      <Lightbox
        isOpen={isOpen}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        images={images}
        currentIndex={currentImageIndex}
      />
    </>
  );
}

export default Images;
