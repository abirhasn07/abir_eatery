import React from 'react';
import './Newsletter.css';
const Newsletter = () => {
	return (
		<section className="newsletter">
			<div className="container newsletter-container">
				<div className="section-header">
					<p className="section-title">NEWSLETTER</p>
					<h3 className="newsletter-title">SIGN UP TO OUR NEWSLETTER</h3>
				</div>
				<form action="" method="get" className="newsletter-form">
					<input type="email" name="" required placeholder="your email" />
					<input type="submit" value="subscribe" className="button-primary" />
				</form>
			</div>
		</section>
	);
};

export default Newsletter;
