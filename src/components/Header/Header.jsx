import React, { useEffect, useRef } from 'react';
import './Header.css';
import gradient from '../../images/gradient.svg';
import { gsap } from 'gsap';
import Navbar from '../Navbar/Navbar';

const Header = () => {
	const headerRef = useRef();
	const titleRef = useRef();
	const mainRef = useRef();

	useEffect(() => {
		const title1 = headerRef.current.children[0];
		const title2 = headerRef.current.children[1];
		const title3 = headerRef.current.children[2];
		const p = headerRef.current.nextSibling;
		const button = p.nextSibling;

		let tl = gsap.timeline({
			delay: 0,
			scrollTrigger: {
				markers: false,
				trigger: mainRef.current,
			},
		});

		tl.to(
			[title1, title2, title3, p, button],
			{ duration: 0.5, y: 0, stagger: 0.3, opacity: 1 },
			0.15,
		);
	}, []);
	return (
		<header ref={mainRef}>
			<div className="container">
				<Navbar />
				<div className="hero-section">
					<h1 className="primary-title" ref={headerRef}>
						<span className="title-span" ref={titleRef}>
							OUTSTANDING
						</span>
						<span className="title-span" ref={titleRef}>
							EUROPEAN
						</span>
						<span className="title-span" ref={titleRef}>
							CUISINE
						</span>
					</h1>
					<p className="hero-subtitle">
						We use only the finest local ingredients available and offer
						seasonal specials throughout the year.
					</p>
					<button className="button-secondary hero-btn">book a table</button>
				</div>
			</div>
			<div className="header-gradient">
				<img src={gradient} alt="" />
			</div>
		</header>
	);
};

export default Header;
