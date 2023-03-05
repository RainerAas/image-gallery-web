import { useEffect } from 'react';

function ImageUploader() {
  useEffect(() => console.log(process.env));

  return (
    <div>
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
        }}
      />
    </div>
  );
}

export default ImageUploader;
