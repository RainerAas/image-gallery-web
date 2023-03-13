/* eslint-disable quotes */
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
// eslint-disable-next-line import/no-unresolved
import "yet-another-react-lightbox/styles.css";

function Images() {
  const images = [
    {
      src: 'https://placekitten.com/1024/768?image=1',
      width: '1024',
      height: '768',
    }, {
      src: 'https://placekitten.com/1024/768?image=2',
      width: '1024',
      height: '768',
    }, {
      src: 'https://placekitten.com/200/300',
      width: '1024',
      height: '768',
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open
      </button>

      <Lightbox open={open} close={() => setOpen(false)} slides={images} />
    </>
  );
}

export default Images;
