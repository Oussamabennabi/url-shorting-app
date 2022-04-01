import React, { useState, useEffect } from 'react';
import LinkContainer from '../LinkContainer';
//STYLES

import './styles/FormField.css';

const BASE_URL = `https://api.shrtco.de/v2/shorten?url=`;
export default function Form() {
	const [originalUrl, setOriginalUrl] = useState('');
	const [error, setError] = useState(false);
	const [Links, setLinks] = useState([
		{
			original_URL: '',
			short_URL: '',
		},
	]);
	const [copied, setCopied] = useState(false);
	
	useEffect(() => {
		const fetch_URL = async (originalUrl) => {
			originalUrl &&
				(await fetch(`${BASE_URL}${originalUrl}`)
					.then((resp) => {
						if (!resp.ok) {
							setError(true);
							throw Error;
						}
						setError(false);
						return resp.json();
					})
					.then((data) => {
						setLinks((prevData) => {
							return [
								{
									original_URL: data.result.original_link,
									short_URL: data.result.short_link,
								},
								...prevData,
							];
						});
					}
					)
					.catch((err) => console.log(err)));
		};
		fetch_URL(originalUrl);
		
	}, [originalUrl]);


	function handleSubmit(e) {
		e.preventDefault();
		if (!e.target[0].value) {
			setError(true);
			return;
		}
		setOriginalUrl(e.target[0].value);
	}

	
	const LinkEls = Links && Links.map((link) => {
		return (
			link.original_URL && (
				<LinkContainer
					key={link.short_URL}
					original_URL={link.original_URL}
					short_URL={link.short_URL}
				/>
			)
		);
	});

	function handleOnChange() {
		setError(false);
	}
	return (
		<>
			<section className="container ">
				<form className="form-section" onSubmit={handleSubmit}>
					<div className="input-container">
						<input
							onChange={handleOnChange}
							className={error ? 'error' : ''}
							placeholder="Shorten a link here..."
						/>
						<div className={`error-txt ${error && 'show-error'}`}>
							please Enter a valide url
						</div>
					</div>
					<button type="submit">Shorten it!</button>
				</form>
			</section>
			<section className="container links-container">
				{ LinkEls}
			</section>
		</>
	);
}
