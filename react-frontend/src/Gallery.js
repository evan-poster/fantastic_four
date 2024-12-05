import React, { useState, useEffect } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';
import logo from './logo.svg';
import './Gallery.css';

function Gallery() {
  const [blobList, setBlobList] = useState([]);

  return (
	<div class="view-uploaded-files">
		<h3>View Uploaded Files</h3>
		<a href="viewuploadedfiles.php">Click here to view uploaded files</a>
	</div>
  );
}

export default Gallery;
