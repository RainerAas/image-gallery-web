import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import api from 'api';
import ImagesList from './images-list';
import ImagesPlaceholder from './images-placeholder';

function Images() {
  const [images, setImages] = useState([]);

  const fetchImages = useCallback(async () => {
    const { data } = await api.get({ url: '/images' });
    setImages(data);
  }, []);

  const onImageDelete = useCallback((id) => {
    setImages(images.filter(({ _id }) => _id !== id));
  }, [images]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (images.length ? (
    <ImagesList images={images} onImageDelete={onImageDelete} />
  ) : (
    <ImagesPlaceholder />
  ));
}

export default Images;
