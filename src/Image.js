import React from 'react';
import './Image.css';


function Image({ src, alt }) {
	return (
		<div>
			<img src={src} alt={alt} />
		</div>
	);
}

export default Image;
