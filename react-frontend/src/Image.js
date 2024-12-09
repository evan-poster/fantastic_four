import React, { useState, useEffect } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';
import logo from './logo.svg';
import './Image.css';
;

function Image({ src, alt }) {
	return (
		<div>
			<img src={src} alt={alt} />
		</div>
	);
}

export default Image;
