import React, { useState } from 'react';
import './Header.css';
import gradient from '../../images/gradient.svg';
const Header = () => {
	const [menu, showMenu] = useState(false);
	return (
		<header>
			<div className="container">
				<nav>
					<li className="nav-list">contact</li>
					<div className="line-effect"></div>
					<p className="logo">eatery</p>
					<div className="line-effect"></div>
					<li className="nav-list" onClick={() => showMenu(!menu)}>
						menu
					</li>
				</nav>
				<div className="hero-section">
					<h1 className="primary-title">OUTSTANDING EUROPEAN CUISINE</h1>
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
