import React, { useState, useEffect } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';
import './Gallery.css';
import Image from './Image';

function Gallery() {
    const [blobList, setBlobList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBlobs() {
            try {
                const accountName = process.env.REACT_APP_STORAGE_ACCOUNT_NAME;
                const sasToken = process.env.REACT_APP_SAS_TOKEN;
                const containerName = process.env.REACT_APP_CONTAINER_NAME;

                if (!accountName || !sasToken || !containerName) {
                    throw new Error("Missing environment variables");
                }

                const blobServiceUrl = `https://${accountName}.blob.core.windows.net`;
                const blobServiceClient = new BlobServiceClient(`${blobServiceUrl}?${sasToken}`);
                const containerClient = blobServiceClient.getContainerClient(containerName);

                let blobs = [];
                for await (const blob of containerClient.listBlobsFlat()) {
                    blobs.push({
                        name: blob.name,
                        url: `${blobServiceUrl}/${containerName}/${blob.name}?${sasToken}`
                    });
                }

                setBlobList(blobs);
            } catch (error) {
                console.error("Error fetching blobs:", error);
                setError("Failed to fetch images. Please try again later.");
            }
        }

        fetchBlobs();
    }, []);

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="gallery">
            {blobList.map((blob, index) => (
                <Image key={index} src={blob.url} alt={blob.name} />
            ))}
        </div>
    );
}

export default Gallery;