import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Contact = () => {
	const location = useLocation();
	const contactPath = location.pathname;

	// TIMES DEFAULT VALUE

	return (
		<div className="contact_page page">
			<div className="circle1"></div>
			<div className="circle2"></div>
			<div className="container">
				<div className="nav">
					<Navbar contactPath={contactPath} />
				</div>
				<div className="contact">
					<h1 className="primary-title">HAVE A QUESTION?</h1>
					<div className="contact-col">
						<p>PHONE</p>
						<a
							href="tel:+800-123-4567
">
							800-123-4567
						</a>
					</div>
					<div className="contact-col">
						<p>EMAIL</p>
						<a href="mailto:INFO@YOURSITE.COM">INFO@YOURSITE.COM</a>
					</div>
					<div className="contact-col">
						<p>ADDRESS</p>
						<a href="#address">123 WEST 45TH STREET NEW YORK, NY</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
