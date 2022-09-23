import React from 'react';
import { blogData } from '../../database/blog';
import { FiArrowUp } from 'react-icons/fi';
import './Blog.css';
const Blog = () => {
	return (
		<section className="blog">
			<div className="container">
				<div className="section-header">
					<p className="section-title">READ OUR BLOGS</p>
					<h2 className="secondary-title">NEWS & RECIPES</h2>
				</div>
				<div className="blog-card-container">
					{blogData.map((item) => {
						return (
							<div className="blog-card" key={item.id}>
								<div className="blog-card-img">
									<img
										src={item.title_img}
										alt={item.title}
										className="blog-card-img"
										height={'250px'}
										width={'300px'}
									/>
								</div>
								<div className="blog-card-info">
									<h6 className="blog-date">{item.date}</h6>
									<h3 className="blog-title">{item.title}</h3>
									<p className="blog-subtitle">{item.subtitle}</p>
									<button className="blog-button">
										<FiArrowUp className="blog-icon" />
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Blog;
