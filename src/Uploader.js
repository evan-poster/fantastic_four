import React, { useState } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';

function Uploader() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const uploadFile = async () => {
        if (!selectedFile) {
            setUploadStatus('Please select a file first.');
            return;
        }

        try {
            const accountName = process.env.REACT_APP_STORAGE_ACCOUNT_NAME;
            const sasToken = process.env.REACT_APP_SAS_TOKEN;
            const containerName = process.env.REACT_APP_CONTAINER_NAME;

            if (!accountName || !sasToken || !containerName) {
                throw new Error("Missing environment variables");
            }

            const blobServiceClient = new BlobServiceClient(
                `https://${accountName}.blob.core.windows.net?${sasToken}`
            );

            const containerClient = blobServiceClient.getContainerClient(containerName);
            const blobClient = containerClient.getBlockBlobClient(selectedFile.name);

            setUploadStatus('Uploading...');

            await blobClient.uploadData(selectedFile, {
                blobHTTPHeaders: { blobContentType: selectedFile.type }
            });

            setUploadStatus('File uploaded successfully!');
        } catch (error) {
            console.error('Error uploading file:', error);
            setUploadStatus('Error uploading file. Please try again.');
        }
    };

    return (
        <div className="file-upload">
            <h2>Upload an Image</h2>
            <input type="file" onChange={handleFileChange} /><br />
            <button className="btn" onClick={uploadFile}>Upload</button>
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
}

export default Uploader;
