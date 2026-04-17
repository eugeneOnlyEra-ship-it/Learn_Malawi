import React, { useState, useRef } from 'react';
import './FileUpload.css';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  accept?: string;
  maxSize?: number; // in bytes
  label?: string;
  disabled?: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onFileSelect,
  accept = '*/*',
  maxSize = 500 * 1024 * 1024, // 500MB default
  label = 'Select File',
  disabled = false,
}) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File | null) => {
    setError(null);

    if (!file) {
      return;
    }

    // Validate file size
    if (file.size > maxSize) {
      setError(
        `File size exceeds ${Math.round(maxSize / (1024 * 1024))}MB limit. ` +
        `Selected file is ${Math.round(file.size / (1024 * 1024))}MB.`
      );
      return;
    }

    setFileName(file.name);
    onFileSelect(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    handleFileChange(file || null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileChange(file);
    }
  };

  return (
    <div className="file-upload-container">
      <div
        className={`file-upload-area ${isDragging ? 'dragging' : ''} ${disabled ? 'disabled' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !disabled && fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleInputChange}
          disabled={disabled}
          style={{ display: 'none' }}
        />

        <div className="upload-icon">📎</div>
        
        {fileName ? (
          <>
            <p className="file-name">{fileName}</p>
            <p className="upload-hint">Click to change file</p>
          </>
        ) : (
          <>
            <p className="upload-label">{label}</p>
            <p className="upload-hint">or drag and drop</p>
          </>
        )}
      </div>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};
