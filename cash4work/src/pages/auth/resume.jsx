import React, { useState } from 'react';

function FileUploadForm() {
  const [file, setFile] = useState(null);

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('fileToUpload', file);

    // Submit the form data to the server using fetch or axios
    fetch('/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      console.log(response);
      // Handle the server response
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <div className="form-container">
      <h1>Upload your Resume!</h1>
      <form onSubmit={handleSubmit}>
        <div className="file-input">
          <label htmlFor="fileToUpload">Select a file to upload:</label>
          <input type="file" name="fileToUpload" id="fileToUpload" onChange={handleFileChange} />
        </div>
        <input type="submit" value="Upload File" disabled={!file} className="submit-button" />
      </form>
    </div>
  );
}

export default FileUploadForm;

// CSS styles
`
.form-container {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.file-input {
  margin: 10px 0;
}

.file-input label {
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.file-input input[type="file"] {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.file-input input[type="file"]:focus {
  outline: none;
  border-color: #0066cc;
}

.submit-button {
  background-color: #0066cc;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #0052a3;
}`
