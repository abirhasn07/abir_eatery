import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import './Newsletter.css';
const Newsletter = () => {
	const [buttonValue, setButtonValue] = useState('subscribe');
	// FORM HANDLING
	const handleSubmit = (e) => {
		e.preventDefault();

		setInterval(() => {
			e.target.firstChild.style.display = 'none';

			setButtonValue('thank you🤞');
		}, 3000);
	};

	//  EMAIL HANDLER

	const emailRef = useRef(null);
	const submitRef = useRef(null);
	return (
		<section className="newsletter">
			<div className="container newsletter-container">
				<div className="section-header">
					<p className="section-title">NEWSLETTER</p>
					<h3 className="newsletter-title">SIGN UP TO OUR NEWSLETTER</h3>
				</div>
				<form className="newsletter-form" onSubmit={handleSubmit}>
					<input
						type="email"
						name=""
						required
						placeholder="your email"
						ref={emailRef}
						className="newsletter-email"
					/>
					<input
						type="submit"
						value={buttonValue}
						className="button-primary"
						ref={submitRef}
					/>
				</form>
			</div>
		</section>
	);
};

export default Newsletter;
