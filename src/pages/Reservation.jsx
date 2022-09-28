/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useEffect } from 'react';
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
	// const title = useRef();
	// TIMES STATES
	const [defaultTimes, setDefaultTimes] = useState('12:00');
	const handleChangeTime = (e) => {
		setDefaultTimes(e.target.value);
	};

	// FORM HANDLER

	const [title, setTitle] = useState('RESERVATION');

	const handleSubmit = (e) => {
		e.preventDefault();

		setInterval(() => {
			const firstName = (e.target[0].style.display = 'none');
			const lastName = (e.target[1].style.display = 'none');
			const email = (e.target[2].style.display = 'none');
			const telNumber = (e.target[3].style.display = 'none');
			const gestCount = (e.target[4].style.display = 'none');
			const date = (e.target[5].style.display = 'none');
			const time = (e.target[6].style.display = 'none');
			const button = (e.target[7].style.display = 'none');
			setTitle(
				`CONGRATULATION ON YOUR BOOKING ON ${e.target[5].value} , HAVE A GOOD DAY`,
			);
		}, 2000);
	};

	return (
		<section className="reservation_page page">
			<div className="container">
				<Navbar reservationPath={reservationPath} />
				<div className="reservation-content">
					<div className="page-header">
						<h1 className="secondary-title">{title}</h1>
					</div>
					<form className="reservation_form" onSubmit={handleSubmit}>
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
							value={defaultTimes}
							onChange={handleChangeTime}
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
