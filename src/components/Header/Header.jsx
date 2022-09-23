import React from 'react';
import './Header.css';

import Navbar from '../Navbar/Navbar';
import SectionHeader from '../SectionHeader/SectionHeader';

const Header = () => {
	return (
		<header>
			<div className="container">
				<Navbar />
				<SectionHeader />
			</div>
			{/* <img src={gradient} alt="" /> */}
		</header>
	);
};

export default Header;
