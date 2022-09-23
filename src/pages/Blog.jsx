import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { blogData } from '../database/blog';
import { useLocation } from 'react-router-dom';

const Blog = () => {
	const location = useLocation();
	const blogPath = location.pathname;
	return (
		<section className="blog_page page">
			<div className="container">
				<Navbar blogPath={blogPath} />
				<div className="blog_page_content">
					{blogData.map((item) => {
						return (
							<div className="blog_page_card" key={item.id}>
								<img
									src={item.title_img}
									alt={item.title}
									loading="lazy"
									width={'400px'}
									height="250px"
								/>
								<div className="blog_page_card_info">
									<p>{item.date}</p>
									<h4>{item.title}</h4>
									<p className="blog_page_subtitle">{item.subtitle}</p>
								</div>
							</div>
						);
					})}
				</div>
				<Footer />
			</div>
		</section>
	);
};

export default Blog;
