import React from 'react';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Reservation = () => {
	const location = useLocation();
	const reservationPath = location.pathname;
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();
	const phoneRef = useRef();
	const gestRef = useRef();
	const dateRef = useRef();
	const timeRef = useRef();

	return (
		<section className="reservation_page page">
			<div className="container">
				<Navbar reservationPath={reservationPath} />
				<div className="reservation-content">
					<div className="page-header">
						<h1 className="secondary-title">RESERVATION</h1>
					</div>
					<form action="" className="reservation_form">
						<input
							type="text"
							name=""
							id=""
							placeholder="fist name"
							required
							className="name input"
							ref={firstNameRef}
						/>
						<input
							type="text"
							name=""
							id=""
							placeholder="last name"
							required
							className="name input"
							ref={lastNameRef}
						/>
						<input
							type="email"
							name=""
							id=""
							placeholder="email"
							required
							className="input email"
							ref={emailRef}
						/>
						<input
							type="tel"
							name=""
							id=""
							placeholder="phone"
							required
							className="phone input"
							ref={phoneRef}
						/>
						<input
							type="number"
							name=""
							id=""
							placeholder="number of guests"
							className="input number"
							min="0"
							max={'100'}
							ref={gestRef}
						/>
						<input
							type="date"
							name=""
							id=""
							placeholder="date"
							className="input date"
							ref={dateRef}
						/>
						<input
							type="time"
							name=""
							id=""
							placeholder="time"
							className="input time"
							ref={timeRef}
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
