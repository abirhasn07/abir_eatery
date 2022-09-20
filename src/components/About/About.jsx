import React, { useEffect, useRef } from 'react';
import about from '../../images/About.jpg';
import about_mini from '../../images/About_mini.jpeg';
import './About.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const About = () => {
	const infoRef = useRef();
	const imgRef = useRef();
	const aboutRef = useRef();

	useEffect(() => {
		let tl = gsap.timeline({
			delay: 0,
			scrollTrigger: {
				trigger: aboutRef.current,
				start: 'top',
				end: 'bottom',
				markers: false,
				scrub: true,
				pin: true,
			},
		});
		tl.to([infoRef.current, imgRef.current], {
			duration: 1,

			stagger: 1,
			opacity: 1,

			scrollTrigger: {
				trigger: aboutRef.current,
				scrub: 1,
			},
		});
	}, []);
	return (
		<section className="about_component" ref={aboutRef}>
			<div className="container about_container">
				<div className="about-info" ref={infoRef}>
					<p className="section-title about_section_title">About us</p>
					<h2 className="secondary-title">
						<span>EATERY</span> <span>GOURMET</span> <span>RESTAURANT</span>
					</h2>
					<p className="about_section-subtitle">
						Laughter is brightest in the place where food is good, good food
						always makes your mood good,welcome to our place
					</p>
					<div className="button-primary about-btn ">MORE ABOUT US</div>
				</div>
				<div className="about-img" ref={imgRef}>
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
