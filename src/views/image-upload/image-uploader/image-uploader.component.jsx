import { useCallback } from 'react';
import api from 'api';

function ImageUploader() {
  const onChange = useCallback(async (e) => {
    const [...files] = e.target.files;

    const uploads = await Promise.allSettled(files.map(async (file) => {
      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await api.post({
          url: '/images',
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        return response.data;
      } catch (err) {
        console.log(err);

        return Promise.reject(err);
      }
    }));

    console.log(uploads);
  }, []);

  return (
    <div>
      <input
        type="file"
        name="myImage"
        onChange={onChange}
      />
    </div>
  );
}

export default ImageUploader;
