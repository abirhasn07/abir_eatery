import gsap, { Power3 } from 'gsap';
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import kitchen_img_mini from '../../images/kitchen (1).jpeg';
import kitchen_img_large from '../../images/kitchen (2).jpeg';
import './Kitchen.css';
const Kitchen = () => {
	const kitchen = useRef();
	const kitchenInfo = useRef();
	const kitchenImg = useRef();
	useEffect(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: kitchen.current,
				start: 'top',
				end: 'end',
				scrub: true,
				pin: true,
			},
		});
		tl.fromTo(
			kitchenInfo.current,
			{
				opacity: 0.7,
				scale: 0.8,
			},
			{
				opacity: 1,
				scale: 1,
				ease: Power3.easeInOut,
				transition: 0.3,
			},
		);
		tl.fromTo(
			kitchenImg.current,
			{
				opacity: 0.7,
				scale: 0.8,
			},
			{
				opacity: 1,
				scale: 1,
				transition: 0.3,
			},
		);
	}, []);
	return (
		<section className="kitchen" ref={kitchen}>
			<div className="section-line"></div>
			<div className="container kitchen-container">
				<div className="kitchen-info" ref={kitchenInfo}>
					<p className="section-title">OUR KITCHEN</p>
					<h2 className="secondary-title">
						PREPARED JUST FOR YOU, ALWAYS USING FRESH INGREDIENTS
					</h2>
				</div>
				<div className="kitchen-images" ref={kitchenImg}>
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
