import React from 'react';
import About from '../components/About/About';
import Blog from '../components/Blog/Blog';
import Events from '../components/Events/Events';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Kitchen from '../components/Kitchen/Kitchen';
import Newsletter from '../components/Newsletter/Newsletter';
import Service from '../components/Service/Service';
import Hero from '../components/Hero/Hero';

const Home = () => {
	return (
		<main className="home_page page">
			<Header />
			<Hero />
			<About />
			<Service />
			<Kitchen />
			<Events />
			<Blog />
			<Newsletter />
			<Footer />
		</main>
	);
};

export default Home;
