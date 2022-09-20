import gsap, { Power3 } from 'gsap';
import React, { useEffect, useRef } from 'react';
import hero_img from '../../images/hero_img.jpg';
import './Hero.css';

const Hero = () => {
	const heroRef = useRef();
	const imgRef = useRef();
	useEffect(() => {
		let tl = gsap.timeline({
			delay: 0,
			scrollTrigger: {
				trigger: heroRef.current,
				start: 'top',
				end: 'bottom',
				markers: false,
				scrub: true,
				pin: true,
			},
		});
		tl.fromTo(
			imgRef.current,
			{ clipPath: 'circle(9%)', filter: 'blur(1px)', duration: 0 },

			{ clipPath: 'circle(75%)', filter: 'blur(0px)', ease: Power3.easeInOut },
		);
	}, []);
	return (
		<section className="hero" ref={heroRef}>
			<img src={hero_img} alt="" className="hero_img" ref={imgRef} />
		</section>
	);
};

export default Hero;
