'use client';

import { useRef } from 'react';
import ShaderButton from './ShaderButton';
import UploadIcon from './UploadIcon';

type UploadButtonProps = {
  label?: string;
  accept?: string; // e.g. ".csv" ba "image/*"
  multiple?: boolean;
  onFiles: (files: File[]) => void;
};

export default function UploadButton({
  label = 'Upload file',
  accept,
  multiple,
  onFiles,
}: UploadButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <ShaderButton icon={<UploadIcon />} onClick={() => inputRef.current?.click()}>
        {label}
      </ShaderButton>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="sr-only"
        onChange={(e) => {
          const files = Array.from(e.target.files ?? []);
          if (files.length) onFiles(files);
          e.target.value = ''; // same file abar select korar jonno
        }}
      />
    </>
  );
}
