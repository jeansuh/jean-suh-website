import React, { useRef } from 'react';
import { Component } from "react";
import Header from './Header.js';
import emailjs from 'emailjs-com';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Contact.css';

export default function Contact(){
	const form = useRef();

	function sendEmail(e) {
		e.preventDefault();
		emailjs.sendForm('service_np39h01', 'template_sl5wh77', form.current, 'kaEcNsipoZ-zIokuW')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	}

	return(
		<div className="form-container">
			<form ref={form} className="contact-form" onSubmit={sendEmail}>
				<input className="field" type="hidden" name="contact_number" />
				<label>Name</label>
				<input className="field" type="text" placeholder="" name="from_name" />
				<label>Email</label>
				<input className="field" type="text" placeholder="" name="from_email" />
				<label>Message</label>
				<input className="field" type="text" placeholder="title" name="subject" />
				<label>Message</label>
				<textarea className="text-field" placeholder="type message here..." name="html_message" />
				<input className="form-submit" type="submit" value="Send" />
			</form>
		</div>

	);
}