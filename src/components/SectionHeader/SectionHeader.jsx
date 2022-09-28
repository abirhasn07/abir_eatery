import { Link } from 'react-router-dom';

const SectionHeader = () => {
	// ANIMATION

	return (
		<div className={'hero-section '}>
			<h1 className="primary-title">OUTSTANDING EUROPEAN CUISINE</h1>
			<p className="hero-subtitle">
				We use only the finest local ingredients available and offer seasonal
				specials throughout the year.
			</p>
			<Link to={'/reservation'} className="button-primary">
				book a table
			</Link>
		</div>
	);
};

export default SectionHeader;
