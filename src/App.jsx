import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';
import Reservation from './pages/Reservation';
import Error from './pages/Error';

const App = () => {
	return (
		<Routes>
			<Route element={<Home />} path="/" />
			<Route element={<Menu />} path="/menu" />
			<Route element={<Contact />} path="/contact" />
			<Route element={<Blog />} path="/blog" />
			<Route element={<About />} path="/about" />
			<Route element={<Reservation />} path="/reservation" />
			<Route element={<Error />} path="*" />
		</Routes>
	);
};

export default App;
