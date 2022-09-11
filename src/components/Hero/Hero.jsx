import React, { useEffect, useRef } from 'react';
import hero_img from '../../images/hero_img.jpg';
import './Hero.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
	const imgRef = useRef();
	console.log(imgRef.current);
	useEffect(() => {
		const el = imgRef.current;

		gsap.fromTo(
			el,
			{ clipPath: 'circle(5% at 77% 40%)' },
			{
				clipPath: 'circle(75% at 50% 50%)',
				ease: 'none',
				duration: 1,
				scrollTrigger: {
					trigger: el,
					scrub: 1,
					start: 'top center',
					end: 'top center',
				},
			},
		);
	}, []);
	return (
		<section className="hero_img">
			<img src={hero_img} alt="" ref={imgRef} />
		</section>
	);
};

export default Hero;
