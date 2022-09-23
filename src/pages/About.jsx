import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter/Newsletter';

const About = () => {
	const location = useLocation();
	const aboutPath = location.pathname;
	return (
		<section className="about_page page">
			<div className="container">
				<Navbar aboutPath={aboutPath} />
				<div className="about-page-content">
					<div className="page-header">
						<h1 className="primary-title">ABOUT US</h1>
						<p className="section-subtitle">
							Phaedra, pure but valuable asset. My pillow is how funny that
							smile carries each client.
						</p>
					</div>
					<div className="banner-content">
						<img
							src="https://ik.imagekit.io/abirhasan/about_banner1_j5ET2r0Ht.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663834068667"
							alt={'couple_dating'}
							className="about-banner"
							loading="lazy"
						/>
						<h2 className="about_banner_title">
							the land is flattering to the airline. For us, the course of
							development is very easy, life is rich. Let the vulputate be
							followed by the aquiet throat.
						</h2>
					</div>
					<div className="chef-content">
						<img
							src="https://ik.imagekit.io/abirhasan/chef_CkoiBRsjt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663834070177"
							alt="chef-img"
							className="chef-img"
							loading="lazy"
						/>
						<div className="chef-info">
							<h3 className="newsletter-title">EXECUTIVE CHEF MILO NEWMAN</h3>
							<p>
								For from this point, it is not the bow itself. But he wants to
								do homework tomorrow, and he's getting older. Laughter, fear of
								football, targeted by the high school, a variety of ferment. Let
								him be free, let him be of life. But now it's a big deal. It's
								also a superhero and it's not fun.
							</p>
							<span>
								It is necessary to push the kids so that there is no running. No
								one needs that element now. He needs to drink as the cat needs.
							</span>
						</div>
					</div>
					<Newsletter />
					<Footer />
				</div>
			</div>
		</section>
	);
};

export default About;
