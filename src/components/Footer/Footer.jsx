import bg from '../../images/gradient.svg';
import React from 'react';
import './Footer.css';
const Footer = () => {
	return (
		<footer>
			<div className="container">
				<ul className="footer-list">
					<h5 className="list-title">SOCIAL</h5>
					<li className="footer-item">INSTAGRAM</li>
					<li className="footer-item">FACEBOOK</li>
					<li className="footer-item">TWITTER</li>
				</ul>
				<ul className="footer-line"></ul>
				<ul className="footer-list">
					<h5 className="list-title">QUICK LINKS</h5>
					<li className="footer-item">LICENSING</li>
					<li className="footer-item">STYLE GUIDE</li>
					<li className="footer-item">CHANGELOG</li>
				</ul>
			</div>
			<img
				src={bg}
				alt=""
				className="footer-bg"
				width={'1040px'}
				height="100px"
			/>
		</footer>
	);
};

export default Footer;
