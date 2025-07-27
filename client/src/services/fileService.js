export async function uploadFile(file, token, onProgress) {
  const formData = new FormData();
  formData.append('file', file);

  return fetch('http://localhost:5000/api/files/upload', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
}

export async function deleteFile(fileId, token) {
  return fetch(`http://localhost:5000/api/files/${fileId}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
}