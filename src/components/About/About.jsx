import React, { useEffect, useRef } from 'react';

import './About.css';

const About = () => {
	const infoRef = useRef();

	const aboutRef = useRef();

	useEffect(() => {}, []);
	return (
		<section className="about_component" ref={aboutRef}>
			<div className="container about_container">
				<div className="about-info" ref={infoRef}>
					<h2 className="secondary-title">OUR STORY</h2>
					<p className="about_section-subtitle">
						Eatery is a Spanish restaurant in Madrid, founded in 1725, that is
						the oldest restaurant in the world in continuous operation. The
						artist Francisco de Goya worked in Café Botín as a waiter while
						waiting to get accepted into the Royal Academy of Fine Arts.
					</p>
					<div className="button-primary about-btn ">MORE ABOUT US</div>
				</div>
				<div className="about-img">
					<img
						src="https://ik.imagekit.io/abirhasan/tr:w-400/kristian-angelo-sLYKdnVQzZQ-unsplash_1__UlWQdKrI_D.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663878268522"
						alt="Eatery is a Spanish restaurant in Madrid, founded in 1725, that is the oldest restaurant in the world in continuous operation. The
						artist Francisco de Goya worked in Café Botín as a waiter while
						waiting to get accepted into the Royal Academy of Fine Arts"
						loading="lazy"
						height={'500px'}
						width="500px"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
