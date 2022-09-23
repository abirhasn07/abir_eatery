import React from 'react';
import About from '../components/About/About';
import Blog from '../components/Blog/Blog';
import Events from '../components/Events/Events';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Newsletter from '../components/Newsletter/Newsletter';
import Service from '../components/Service/Service';
import { useLocation } from 'react-router-dom';

const Home = () => {
	const location = useLocation();
	const path = location.pathname;
	return (
		<main className="home_page page">
			<Header path={path} />

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
