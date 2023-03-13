import Gallery from 'react-photo-gallery';

function Images() {
  const photos = [
    {
      src: 'https://placekitten.com/1024/768?image=1',
      width: 4,
      height: 3,
    }, {
      src: 'https://placekitten.com/1024/768?image=2',
      width: 4,
      height: 3,
    }, {
      src: 'https://placekitten.com/200/300',
      width: 2,
      height: 3,
    }, {
      src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
      width: 1,
      height: 1,
    }, {
      src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
      width: 3,
      height: 4,
    },
  ];

  return (
    <Gallery photos={photos} />
  );
}

export default Images;
