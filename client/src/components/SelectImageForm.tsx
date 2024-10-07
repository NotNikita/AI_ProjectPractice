'use client';

import {useState} from 'react';
import Image from 'next/image';
import {Button} from './Button';
import {triggerDepthPro} from '@/api/api-actions';

export default function SelectImageForm() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setImageFile(file);
    }
  };

  const handleAnalyze = () => {
    if (!selectedImage || !imageFile) return;

    console.log('Analyzing depth for image:', selectedImage);
    triggerDepthPro(imageFile).then(data => {
      console.log('Depth Data:', data);
    });
  };

  return (
    <div>
      <p className='mb-5 text-sm leading-normal text-mauve11'>Use selector below to insert image for uploading</p>

      <input type='file' accept='image/*' className='w-full' onChange={handleImageChange} />
      {selectedImage && (
        <Image width={150} height={150} src={selectedImage} alt='x-ray placeholder' className='mx-auto' />
      )}

      <div className='mt-5 flex justify-end'>
        <Button action={handleAnalyze} disabled={!selectedImage}>
          Analyze depth
        </Button>
      </div>
    </div>
  );
}
