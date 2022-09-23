import React from 'react';
import About from '../components/About/About';
import Blog from '../components/Blog/Blog';
import Events from '../components/Events/Events';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Newsletter from '../components/Newsletter/Newsletter';
import Service from '../components/Service/Service';

const Home = () => {
	return (
		<main className="home_page page">
			<Header />

			<About />
			<Service />

			<Events />
			<Blog />
			<Newsletter />
			<Footer />
		</main>
	);
};

export default Home;
