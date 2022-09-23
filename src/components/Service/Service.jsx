import React from 'react';

import './Service.css';
const Service = () => {
	return (
		<section className="our_service">
			<div className="container flex_container">
				<div className="card">
					<h2 className="card_number">1</h2>
					<h3 className="card-title">FRESH INGREDIENTS</h3>
					<p className="card-subtitle">
						I've taught myself how to use good, fresh ingredients and to prepare
						them as simply as possible by cooking only to enhance their
						intrinsic flavors.
					</p>
				</div>
				<div className="card">
					<h2 className="card_number">2</h2>
					<h3 className="card-title">CHEF'S SPECIALTIES</h3>
					<p className="card-subtitle">
						If you are a chef, no matter how good a chef you are, it's not good
						cooking for yourself; the joy is in cooking for others - it's the
						same with music.
					</p>
				</div>
				<div className="card">
					<h2 className="card_number">3</h2>
					<h3 className="card-title">WEDDINGS & EVENTS</h3>
					<p className="card-subtitle">
						One day, in your search for happiness, you discover a partner by
						your side, and you realize that your happiness has come to help you
						search
					</p>
				</div>
			</div>
		</section>
	);
};

export default Service;
