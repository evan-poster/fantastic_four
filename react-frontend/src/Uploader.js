import React, { useState, useEffect } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';
import logo from './logo.svg';
import './Uploader.css';

function Uploader() {
  const [blobList, setBlobList] = useState([]);

  return (
	<div className="file-upload">
		<h3>File Upload Section</h3>
		<form action="fileupload.php" encType="multipart/form-data" method="post">
			<label className="custom-uploader" htmlFor="file">Upload Your File</label><br />
			<input id="file" accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps" name="fileToUpload" type="file" /><br />
			<button className="btn" name="submit" type="submit">Upload File</button>
		</form>
	</div>
  );
}

export default Uploader;
