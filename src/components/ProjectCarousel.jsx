import './ProjectCarousel.css';
import React from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import GiveYourAll from '../media/img/GiveYourAll.png';
import OneArmedBandit from '../media/img/OneArmedBandit.png';
import Palanthas from '../media/img/Palanthas.png';
import IntoInfinity from '../media/img/IntoInfinity.png';
import ShipCollector from '../media/img/ShipCollector.png';
import MoneyPal from '../media/img/MoneyPal.png';

export default function ProjectCarousel(){

const projectList = [
						{
								id: 0
        "One-Armed Bandit",
								OneArmedBandit,
								"http://theiancannon.github.io/GA-Project1-SlotMachine/",
								"An HTML/CSS/JS-based slot machine with animated *.gif reels and contextual sound effects"
						},
						{
								"Palanthas",
								Palanthas,
								"http://project-palanthas.herokuapp.com/",
								"Developed in MongoDB/Express/Node for collecting, reviewing, and rating books"
						},
						{
								"Ship Collector",
								ShipCollector,
								"http://shipcollector.herokuapp.com/",
								"Created using Python/Django and based on The Expanse series, halfway between sci-fi harbormaster monitoring software and narrative tracking for fans."
						},
						{
								"Into Infinity",
								IntoInfinity,
								"http://intoinfinity.herokuapp.com/",
								"Also built with Python/Django as a mob-coding project, this space-exploration and teaching app is sized to the solar system, but scalable beyond, and tracks missions and objects in space"
						},
						{
								"Give Your All",
								GiveYourAll,
								"http://giveyourall.herokuapp.com/",
								"This app searches an API for charity data and totals up orders for donation amounts; such a design could conceivably handle/anonymize donations through Stripe or similar software"
						},
						{
								"Money Pal",
								MoneyPal,
								"https://pensive-goodall-ea0925.netlify.app/",
								"Developed in a February 2022 Hackathon with a team of UX/UI designers and fellow engineers, this simple financial analysis tool offers advice on a user's finances—and preserves anonymity by front-end-only design"
						}
				];

}