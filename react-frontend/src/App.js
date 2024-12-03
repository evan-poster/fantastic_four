import React, { useState, useEffect } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';
import logo from './logo.svg';
import './App.css';

function App() {
  const [blobList, setBlobList] = useState([]);

  useEffect(() => {
    async function fetchBlobs() {
      try {
        // Your account name
        const accountName = "thefantasticfour4444";

        // Your SAS token (make sure it has the necessary permissions and is not expired)
        const sasToken = "sp=r&st=2024-12-03T17:16:58Z&se=2024-12-04T01:16:58Z&spr=https&sv=2022-11-02&sr=c&sig=2dHxecLX%2FwrCHv18VcXeUxPZwuLSwMfTIP35ph8kSlY%3D";

        // Construct the blob service client URL
        const blobServiceUrl = `https://${accountName}.blob.core.windows.net`;
        
        // Create the BlobServiceClient object
        const blobServiceClient = new BlobServiceClient(`${blobServiceUrl}?${sasToken}`);

        // Your container name
        const containerName = "thefantasticfourvault";
        const containerClient = blobServiceClient.getContainerClient(containerName);

        let blobs = [];
        for await (const blob of containerClient.listBlobsFlat()) {
          blobs.push(blob.name);
        }

        setBlobList(blobs);
      } catch (error) {
        console.error("Error fetching blobs:", error);
      }
    }

    fetchBlobs();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Azure Blob Storage in React</h1>
        <ul>
          {blobList.map((blob, index) => (
            <li key={index}>{blob}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
