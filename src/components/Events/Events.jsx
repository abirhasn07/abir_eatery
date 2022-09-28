import React, { useEffect, useRef } from 'react';
import './Events.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import required modules
import { Pagination, Autoplay } from 'swiper';
import { slider } from '../../database/slider';
import { Link } from 'react-router-dom';

const Events = () => {
	const eventRef = useRef();
	const eventHeader = useRef();
	const swiperRef = useRef();

	useEffect(() => {}, []);
	return (
		<section className="event" ref={eventRef}>
			<div className="container">
				<div className="event-header" ref={eventHeader}>
					<p className="section-title">WEDDINGS & EVENTS</p>
					<h2 className="secondary-title">
						CATERING FOR YOUR WEDDINGS & EVENTS
					</h2>
					<p className="section-subtitle">
						True love is the greatest thing, in the world, except for a nice MLT
						—mutton, lettuce and tomato sandwich, where the mutton is nice and
						lean and the tomato is ripe.
					</p>
					<Link to="/reservation" className="button-primary">
						BOOK A CATERING
					</Link>
				</div>
				<div className="swiper-container">
					<Swiper
						ref={swiperRef}
						slidesPerView={1.3}
						spaceBetween={-10}
						centeredSlides={true}
						pagination={{
							clickable: true,
						}}
						autoplay={{
							delay: 10000,
							disableOnInteraction: true,
						}}
						loop={true}
						speed={500}
						modules={[Pagination, Autoplay]}
						className="mySwiper">
						{slider.map((item) => {
							const { img, id } = item;
							return (
								<SwiperSlide key={id}>
									<img src={img} alt={'event photos'} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Events;
