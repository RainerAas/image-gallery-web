/* eslint-disable object-curly-newline */
import {
  useCallback,
  useState,
  useMemo,
  useEffect,
} from 'react';
import api from 'api';
import { v4 as uuid } from 'uuid';
import {
  LinearProgress,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ImagePreviewList from './image-preview-list';
import ImageUploaderErrorList from './image-uploader-error-list';
import * as Styled from './image-uploader.styles';

function ImageUploader() {
  const [hovering, setHovering] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState();
  const [totalUploadSize, setTotalUploadSize] = useState(0);
  const [loadedUploadSize, setLoadedUploadSize] = useState(0);

  const isErrored = useMemo(() => status === 'errored', [status]);
  const isProcessing = useMemo(() => status === 'processing', [status]);
  const fileTypes = useMemo(() => ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'], []);
  const progress = useMemo(() => (
    ((loadedUploadSize / totalUploadSize) * 100) || 0
  ), [loadedUploadSize, totalUploadSize]);

  const onChange = useCallback(async (e) => {
    setStatus('processing');

    const [...files] = e.type === 'drop' ? e.dataTransfer.files : e.target.files;

    const uploads = await Promise.allSettled(files.map(async (file) => {
      try {
        if (!fileTypes.includes(file.type)) {
          const error = { id: uuid(), fileName: file.name, message: 'Unsupported file type' };
          return Promise.reject(error);
        }

        const formData = new FormData();
        formData.append('file', file);

        const response = await api.post({
          url: '/images',
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            setTotalUploadSize(totalUploadSize + total);
            setLoadedUploadSize(loadedUploadSize + loaded);
          },
        });

        return response.data;
      } catch (err) {
        const error = { id: uuid(), fileName: file.name, message: err.response.data.error };
        return Promise.reject(error);
      }
    }));

    const successfulUploads = uploads.filter((upload) => upload.status === 'fulfilled');
    const erroredUploads = uploads.filter((upload) => upload.status === 'rejected');

    if (successfulUploads.length) {
      setUploadedImages([...uploadedImages, ...successfulUploads.map(({ value }) => value)]);
    }

    if (erroredUploads.length) {
      setErrors([...erroredUploads.map(({ reason }) => reason)]);
    }

    e.target.value = null;

    setStatus(erroredUploads.length ? 'errored' : null);
    setTotalUploadSize(0);
    setLoadedUploadSize(0);
  }, [fileTypes, loadedUploadSize, totalUploadSize, uploadedImages]);

  const onErrorClose = useCallback((id) => {
    setErrors(errors.filter((error) => error.id !== id));
  }, [errors]);

  const onDragOver = useCallback((e) => {
    e.preventDefault();
    setHovering(true);
  }, []);

  const onDragLeave = useCallback(() => {
    setHovering(false);
  }, []);

  const onDrop = useCallback(async (e) => {
    e.preventDefault();
    e.stopPropagation();

    setHovering(false);

    if (!isProcessing) {
      onChange(e);
    }
  }, [isProcessing, onChange]);

  useEffect(() => {
    if (!errors.length) {
      setStatus(null);
    }
  }, [errors]);

  return (
    <>
      <Styled.Dropzone
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        hovering={hovering}
        errored={isErrored}
        disabled={isProcessing}
      >
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Grid item>
            <CloudUploadIcon fontSize="large" />
          </Grid>
          <Grid item>
            <Typography align="center">Drag and drop or browse to choose files</Typography>
          </Grid>
        </Grid>
        <input
          hidden
          multiple
          name="files"
          type="file"
          onChange={onChange}
          disabled={isProcessing}
          accept={fileTypes.join(',')}
        />
      </Styled.Dropzone>
      {status === 'processing' && (
        <Box width="100%" mt={1}>
          <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
              <LinearProgress variant="determinate" value={(progress)} sx={{ height: 15, borderRadius: 5 }} />
            </Box>
            <Box>
              <Typography>
                {`${Math.round(progress)}%`}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
      {isErrored && (
        <ImageUploaderErrorList
          errors={errors}
          onErrorClose={onErrorClose}
        />
      )}
      <ImagePreviewList
        images={uploadedImages}
      />
    </>
  );
}

export default ImageUploader;
