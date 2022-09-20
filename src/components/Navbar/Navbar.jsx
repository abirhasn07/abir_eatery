import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
	const [menu, showMenu] = useState(false);

	return (
		<>
			<nav>
				<li className="nav-list">contact</li>
				<div className="line-effect"></div>
				<p className="logo"> eatery</p>
				<div className="line-effect"></div>
				<li className="nav-list" onClick={() => showMenu(!menu)}>
					menu
				</li>
			</nav>
			<div className={!menu ? 'menu' : 'menu active'}>
				<ul className="menu-list">
					<Link to="/menu" className="menu-list-item">
						Menu
					</Link>
					<Link to="/reservation" className="menu-list-item">
						Reservation
					</Link>
					<Link to="/contact" className="menu-list-item">
						Contact
					</Link>
					<Link to="/about" className="menu-list-item">
						About
					</Link>
					<Link to="/blog" className="menu-list-item">
						Blog
					</Link>
					<button className="close-btn" onClick={() => showMenu(!menu)}>
						close
					</button>
					<Link to="/" className="return-home">
						Return Home
					</Link>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
