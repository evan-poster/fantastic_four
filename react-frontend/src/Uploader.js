import React, { useState, useEffect } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';
import logo from './logo.svg';
import './Uploader.css';

function Uploader() {
  const [blobList, setBlobList] = useState([]);

  return (
	<div class="file-upload">
		<h3>File Upload Section</h3>
		<form action="fileupload.php" enctype="multipart/form-data" method="post">
			<label class="custom-uploader" for="file">Upload Your File</label><br />
			<input id="file" accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps" name="fileToUpload" type="file" /><br />
			<button class="btn" name="submit" type="submit">Upload File</button>
		</form>
	</div>
  );
}

export default Uploader;
