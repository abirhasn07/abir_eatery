import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import { foodData } from '../database/menu.js';
import { formatCurrency } from '../utilities/CurrencyConverter.js';

const Menu = () => {
	return (
		<section className="menu_page page">
			<div className="container">
				<Navbar />
				<div className="page-header">
					<h1 className="primary-title">MENU</h1>
					<p
						className="section_subtitle"
						style={{
							width: '55%',
							lineHeight: '150%',
							fontSize: '1.125rem',
							fontWeight: '300',
							margin: '1rem 0 ',
						}}>
						It's a lot of easy stuff, that's for sure. But the chocolate bed
						quiver. Urn rhoncus is a valuable asset.
					</p>
				</div>
				<div className="foods">
					{foodData.map((item) => {
						return (
							<div className="food_items" key={item.id}>
								<img
									src={item.img}
									alt={item.foodName}
									loading="lazy"
									className="food_img"
								/>
								<div className="food_items_info">
									<h5 className="food_name">{item.foodName}</h5>
									<p className="food_description">{item.details}</p>
									<p className="food_cal">
										{item.cal}{' '}
										<span className="food_price">
											{formatCurrency(item.price)}
										</span>
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Menu;
