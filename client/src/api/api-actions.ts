export async function triggerDepthPro(imageFile: Blob) {
  const formData = new FormData();
  formData.append('file', imageFile);

  try {
    const response = await fetch('http://localhost:8000/depth-pro', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Depth Data:', data.depth);
    console.log('Focal Length:', data.focal_length);
  } catch (error) {
    console.error('Error:', error);
  }
}
