import React from 'react';
import "./popOverUoload.css"

class UploadButton extends React.Component {
  handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Do something with the uploaded file, e.g., send it to a server
    console.log('Uploaded file:', file);
  };

  render() {
    return (
      <div>
        <label htmlFor="fileInput" id="lable">Select from computer </label>
        <input
          type="file"
          id="fileInput"
          onChange={this.handleFileUpload}
          style={{ display: 'none' }}
        />
      </div>
    );
  }
}

export default UploadButton;


