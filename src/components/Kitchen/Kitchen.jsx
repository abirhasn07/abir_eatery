import React from 'react';
import kitchen_img_mini from '../../images/kitchen (1).jpeg';
import kitchen_img_large from '../../images/kitchen (2).jpeg';
import './Kitchen.css';
const Kitchen = () => {
	return (
		<section className="kitchen">
			<div className="section-line"></div>
			<div className="container kitchen-container">
				<div className="kitchen-info">
					<p className="section-title">OUR KITCHEN</p>
					<h2 className="secondary-title">
						PREPARED JUST FOR YOU, ALWAYS USING FRESH INGREDIENTS
					</h2>
				</div>
				<div className="kitchen-images">
					<div className="kitchen-img-large">
						<img src={kitchen_img_large} alt="eatery foods" />
					</div>

					<div className="kitchen-img-mini">
						<img src={kitchen_img_mini} alt="eatery foods" className="" />
					</div>

					<div className="kitchen-img-info">
						<p className="kitchen-subtitle">
							i've taught myself how to use good, fresh ingredients and to
							prepare them as simply as possible by cooking only to enhance
							their intrinsic flavors.
						</p>
						<button className="button-primary kitchen-button">Our Menu</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Kitchen;
