import React, { useState } from 'react';
//STYLES

import './styles/LinkContainer.css';
export default function LinkContainer({original_URL
,short_URL}) {
	const [copied, setCopied] = useState(false);
	

	function copyToClipboard(link) {
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
			
		}, 1000);
		navigator.clipboard.writeText(link);
	}
	
	return (
		<div  className="link-container">
			<div className="left-container">
				<a className="normal-link">{original_URL}</a>
			</div>
			<div className="right-container">
				<a className="shorted-link">{short_URL}</a>
				<button
					className={copied ? 'copied-btn' : ''}
					onClick={() => copyToClipboard(short_URL)}
				>
					{copied ? 'copied !' : 'copy'}
				</button>
			</div>
		</div>
	);
}
