import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const Reservation = () => {
	return (
		<section className="reservation_page page">
			<div className="container">
				<Navbar />
				<div className="reservation-content">
					<div className="page-header">
						<h1 className="primary-title">RESERVATION</h1>
						<p className="section_subtitle">
							When you don't have anything to lose, you discover something
							wonderful: you're free to take great risks without fear or
							reservation.
						</p>
					</div>
					<form action="" className="reservation_form">
						<input
							type="text"
							name=""
							id=""
							placeholder="fist name"
							required
							className="name input"
						/>
						<input
							type="text"
							name=""
							id=""
							placeholder="last name"
							required
							className="name input"
						/>
						<input
							type="email"
							name=""
							id=""
							placeholder="email"
							required
							className="input email"
						/>
						<input
							type="tel"
							name=""
							id=""
							placeholder="phone"
							required
							className="phone input"
						/>
						<input
							type="number"
							name=""
							id=""
							placeholder="number of guests"
							className="input number"
							min="0"
							max={'100'}
						/>
						<input
							type="date"
							name=""
							id=""
							placeholder="date"
							className="input date"
						/>
						<input
							type="time"
							name=""
							id=""
							placeholder="time"
							className="input time"
						/>
						<input
							type="submit"
							value="reserve"
							className="submit button-primary"
						/>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Reservation;
