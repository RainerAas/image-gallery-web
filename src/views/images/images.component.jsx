import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import api from 'api';
import ImagesList from './images-list';
import ImagesPlaceholder from './images-placeholder';

function Images() {
  const [status, setStatus] = useState();
  const [images, setImages] = useState();

  const isErrored = useMemo(() => status === 'error', [status]);
  const isProcessing = useMemo(() => status === 'processing', [status]);

  const fetchImages = useCallback(async () => {
    try {
      setStatus('processing');

      const { data } = await api.get({ url: '/images' });
      setImages(data);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }, []);

  const onImageDelete = useCallback((id) => {
    setImages(images.filter(({ _id }) => _id !== id));
  }, [images]);

  const renderImages = useCallback(() => {
    if (isProcessing) {
      return null;
    }

    if (isErrored) {
      return (
        <ImagesPlaceholder errored />
      );
    }

    if (images) {
      if (images.length) {
        return <ImagesList images={images} onImageDelete={onImageDelete} />;
      }

      return <ImagesPlaceholder />;
    }

    return null;
  }, [images, isErrored, isProcessing, onImageDelete]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return renderImages();
}

export default Images;
