import React, { useState } from 'react';


import { Link } from 'react-router-dom';

const Navbar = ({
	path,
	menuPath,
	reservationPath,
	contactPath,
	blogPath,
	aboutPath,
}) => {
	const [menu, showMenu] = useState(false);

	return (
		<>
			<nav>
				{!reservationPath ? (
					<Link to="/reservation" className="nav-list">
						book a table
					</Link>
				) : (
					<Link to={'/blog'} className="nav-list">
						Read Our Blog
					</Link>
				)}
				<div className="line-effect"></div>
				<Link to="/" className="logo">
					eatery
				</Link>
				<div className="line-effect"></div>
				<li className="nav-list" onClick={() => showMenu(!menu)}>
					menu
				</li>
			</nav>
			<div className={!menu ? 'menu' : 'menu active'}>
				<ul className="menu-list">
					{!menuPath ? (
						<Link to="/menu" className="menu-list-item">
							our food menu
						</Link>
					) : (
						<></>
					)}

					{!reservationPath ? (
						<Link to="/reservation" className="menu-list-item">
							book a table
						</Link>
					) : (
						<></>
					)}
					{!contactPath ? (
						<Link to="/contact" className="menu-list-item">
							Contact Us
						</Link>
					) : (
						<></>
					)}
					{!aboutPath ? (
						<Link to="/about" className="menu-list-item">
							About Us
						</Link>
					) : (
						<></>
					)}
					{!blogPath ? (
						<Link to="/blog" className="menu-list-item">
							Our Blog
						</Link>
					) : (
						<></>
					)}
					<button className="close-btn" onClick={() => showMenu(!menu)}>
						close
					</button>
					{!path ? (
						<Link to="/" className="return-home">
							Return Home
						</Link>
					) : (
						<></>
					)}
				</ul>
			</div>
		</>
	);
};

export default Navbar;
