import React from 'react';
import about from '../../images/About.jpg';
import about_mini from '../../images/About_mini.jpeg';
import './About.css';
const About = () => {
	return (
		<section className="about_component">
			<div className="container about_container">
				<div className="about-info">
					<p className="section-title about_section_title">About us</p>
					<h2 className="secondary-title">EATERY GOURMET RESTAURANT</h2>
					<p className="about_section-subtitle">
						Laughter is brightest in the place where food is good, good food
						always makes your mood good,welcome to our place{' '}
					</p>
					<div className="button-primary about-btn ">MORE ABOUT US</div>
				</div>
				<div className="about-img">
					<img
						src={about}
						alt="eatery restaurant"
						loading="lazy"
						className="about_img_large"
					/>
					<img
						src={about_mini}
						alt="eatery restaurant"
						loading="lazy"
						className="about_img_mini"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
