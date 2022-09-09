export function UploadImageToDB(formData) {
    fetch('/', {
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}
