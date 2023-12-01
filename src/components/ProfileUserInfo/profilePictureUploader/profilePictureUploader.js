import "./profilePictureUploader.css"

import React, { useState } from 'react';
import axios from 'axios';


const ProfilePictureUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        setSelectedFile(file);
  
        // Read and display the image as a preview
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleUpload = async () => {
      if (!selectedFile) {
        alert('Please select a file');
        return;
      }
  
      const formData = new FormData();
      formData.append('image', selectedFile);
  
      try {
        const response = await axios.post('YOUR_UPLOAD_API_ENDPOINT', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        console.log('Image uploaded successfully:', response.data);
        // Handle success, update UI, etc.
      } catch (error) {
        console.error('Error uploading image:', error);
        // Handle error, update UI, etc.
      }
    };
    return ( 
        <div className="profilPictureUploaderContainer">
              <label htmlFor="fileInput">
        {previewImage && <img src={previewImage} alt="Preview" style={{ maxWidth: '300px', cursor: 'pointer' }} />}
        {!previewImage && (
          <div>
            <span style={{ cursor: 'pointer' }}>
                <img src="profilePicture.jpg" alt="profilePicture"/>
            </span>
          </div>
        )}
      </label>
      <input
        id="fileInput"
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
      {/* <button onClick={handleUpload}>Upload</button> */}
        </div>
     );
}
 
export default ProfilePictureUploader;