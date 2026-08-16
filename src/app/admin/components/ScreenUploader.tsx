'use client';

import { useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  ALLOWED_IMAGE_TYPES,
  formatFileSize,
  isAllowedImageType,
  MAX_UPLOAD_SIZE_BYTES,
} from '@/lib/upload';

import './ScreenUploader.css';

type QueuedFile = {
  id: string;
  file: File;
  previewUrl: string;
};

type UploadedScreen = {
  id?: string;
  url: string;
  pathname: string;
  contentType: string;
  size: number;
  filename: string;
};

type ScreenUploaderProps = {
  projectId?: string;
  onUploaded?: (screens: UploadedScreen[]) => void;
};

export default function ScreenUploader({ projectId, onUploaded }: ScreenUploaderProps) {
  const router = useRouter();
  const [queuedFiles, setQueuedFiles] = useState<QueuedFile[]>([]);
  const [uploadedScreens, setUploadedScreens] = useState<UploadedScreen[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const acceptedTypes = useMemo(() => ALLOWED_IMAGE_TYPES.join(', '), []);

  function addFiles(files: FileList | File[]) {
    setError(null);

    const nextFiles = Array.from(files);
    const invalidFile = nextFiles.find((file) => !isAllowedImageType(file.type));
    if (invalidFile) {
      setError(`${invalidFile.name} is not a supported image type.`);
      return;
    }

    const oversizedFile = nextFiles.find((file) => file.size > MAX_UPLOAD_SIZE_BYTES);
    if (oversizedFile) {
      setError(`${oversizedFile.name} is larger than ${formatFileSize(MAX_UPLOAD_SIZE_BYTES)}.`);
      return;
    }

    setQueuedFiles((current) => [
      ...current,
      ...nextFiles.map((file) => ({
        id: `${file.name}-${file.size}-${crypto.randomUUID()}`,
        file,
        previewUrl: URL.createObjectURL(file),
      })),
    ]);
  }

  function moveFile(index: number, direction: -1 | 1) {
    setQueuedFiles((current) => {
      const target = index + direction;
      if (target < 0 || target >= current.length) return current;

      const next = [...current];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  function removeFile(id: string) {
    setQueuedFiles((current) => {
      const fileToRemove = current.find((item) => item.id === id);
      if (fileToRemove) URL.revokeObjectURL(fileToRemove.previewUrl);
      return current.filter((item) => item.id !== id);
    });
  }

  async function uploadFiles() {
    if (queuedFiles.length === 0) {
      setError('Add at least one screen before uploading.');
      return;
    }

    setIsUploading(true);
    setError(null);

    const formData = new FormData();
    if (projectId) formData.append('projectId', projectId);
    queuedFiles.forEach(({ file }) => formData.append('files', file));

    try {
      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      const responseText = await response.text();
      const payload = responseText ? JSON.parse(responseText) : null;
      if (!response.ok) {
        throw new Error(payload?.error || responseText || 'Upload failed.');
      }

      setUploadedScreens(payload.screens || []);
      onUploaded?.(payload.screens || []);
      queuedFiles.forEach((item) => URL.revokeObjectURL(item.previewUrl));
      setQueuedFiles([]);
      router.refresh();
    } catch (err) {
      setError(err instanceof SyntaxError ? 'Upload returned an invalid response. Check your auth/session and Blob env.' : err instanceof Error ? err.message : 'Upload failed.');
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div className="screen-uploader">
      <input
        ref={inputRef}
        type="file"
        accept={acceptedTypes}
        multiple
        onChange={(event) => {
          if (event.target.files) addFiles(event.target.files);
          event.target.value = '';
        }}
      />

      <button
        className={`upload-dropzone ${isDragging ? 'is-dragging' : ''}`}
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setIsDragging(false);
          addFiles(event.dataTransfer.files);
        }}
      >
        <span>Drop screens here</span>
        <small>PNG, JPG, WebP, or GIF up to {formatFileSize(MAX_UPLOAD_SIZE_BYTES)} each</small>
      </button>

      {error && <p className="upload-error">{error}</p>}

      {queuedFiles.length > 0 && (
        <div className="upload-queue">
          <div className="upload-queue-header">
            <h2>Queued screens</h2>
            <button className="upload-action" type="button" onClick={uploadFiles} disabled={isUploading}>
              {isUploading ? 'Uploading...' : `Upload ${queuedFiles.length} screen${queuedFiles.length === 1 ? '' : 's'}`}
            </button>
          </div>

          <ol className="screen-list">
            {queuedFiles.map((item, index) => (
              <li key={item.id} className="screen-list-item">
                <img src={item.previewUrl} alt="" />
                <div>
                  <strong>{item.file.name}</strong>
                  <span>{formatFileSize(item.file.size)}</span>
                </div>
                <div className="screen-actions">
                  <button type="button" onClick={() => moveFile(index, -1)} disabled={index === 0}>Up</button>
                  <button type="button" onClick={() => moveFile(index, 1)} disabled={index === queuedFiles.length - 1}>Down</button>
                  <button type="button" onClick={() => removeFile(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {uploadedScreens.length > 0 && (
        <div className="upload-results">
          <h2>Uploaded</h2>
          <ol>
            {uploadedScreens.map((screen) => (
              <li key={screen.url}>
                <a href={screen.url} target="_blank" rel="noreferrer">{screen.filename}</a>
                <span>{screen.pathname}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
