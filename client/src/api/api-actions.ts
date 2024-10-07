export async function triggerDepthPro(imageFile: File) {
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
    console.log('Data received:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}
