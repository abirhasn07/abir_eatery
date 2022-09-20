import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import gradient from '../../images/gradient.svg';
import { gsap } from 'gsap';

const Header = () => {
	const [menu, showMenu] = useState(false);
	const headerRef = useRef();
	const titleRef = useRef();
	const navRef = useRef();
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
			{ duration: 0.5, y: 0, stagger: 0.3, opacity: 1, scale: 1 },
			0.15,
		);
	}, []);
	return (
		<header ref={mainRef}>
			<div className="container">
				<nav ref={navRef}>
					<li className="nav-list">contact</li>
					<div className="line-effect"></div>
					<p className="logo"> eatery</p>
					<div className="line-effect"></div>
					<li className="nav-list" onClick={() => showMenu(!menu)}>
						menu
					</li>
				</nav>
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
			<div className={!menu ? 'menu' : 'menu active'}>
				<ul className="menu-list">
					<li className="menu-list-item">Menu</li>
					<li className="menu-list-item">Reservation</li>
					<li className="menu-list-item">Contact</li>
					<li className="menu-list-item">About</li>
					<li className="menu-list-item">Blog</li>
					<button className="close-btn" onClick={() => showMenu(!menu)}>
						close
					</button>
				</ul>
			</div>
		</header>
	);
};

export default Header;
