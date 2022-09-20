import gsap from 'gsap';
import React, { useRef, useEffect } from 'react';

import './Service.css';
const Service = () => {
	const mainService = useRef();
	const serviceRef = useRef();
	useEffect(() => {
		console.log(serviceRef.current.children);
		const card1 = serviceRef.current.children[0];
		const card2 = serviceRef.current.children[1];
		const card3 = serviceRef.current.children[2];
		let tl = gsap.timeline(
			{
				delay: 0,
				scrollTrigger: {
					trigger: mainService.current,
					start: 'top',
					end: '100px',

					scrub: true,
				},
			},
			0.15,
		);
		tl.fromTo(
			[card1, card2, card3],
			{ opacity: 0.2, duration: 0.5, translateY: '50px', stagger: 0.3 },
			{ opacity: 1, translateY: '0' },
		);
	}, []);
	return (
		<section className="our_service" ref={mainService}>
			<div className="container flex_container" ref={serviceRef}>
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
