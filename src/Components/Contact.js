import React from 'react';
import { Component } from "react";
import Header from './Header.js';
import emailjs from 'emailjs-com';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Contact.css';

export default function Contact(){

	function sendEmail(e) {
		e.preventDefault();
		emailjs.sendForm('service_np39h01', 'template_sl5wh77', e.target, 'kaEcNsipoZ-zIokuW')
			.then((result) => {
				window.location.reload()
			}, (error) => {
				console.log(error.text);
			});
	}

	return(
		<div className="form-container">
			<form className="contact-form" onsubmit={sendEmail}>
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