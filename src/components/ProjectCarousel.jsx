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
										id: 0,
										src: OneArmedBandit,
										url: "http://theiancannon.github.io/GA-Project1-SlotMachine/",
										desc: "One-Armed Bandit is an HTML/CSS/JS-based slot machine with animated *.gif reels and contextual sound effects."
								},
								{
										id: 1,
										src: Palanthas,
										url: "http://project-palanthas.herokuapp.com/",
										desc: "Palanthas was developed in MongoDB/Express/Node for collecting, reviewing, and rating books."
								},
								{
										id: 2,
										src: ShipCollector,
										url: "http://shipcollector.herokuapp.com/",
										desc: "ShipCollector, created using Python/Django as a fan project based on The Expanse sci-fi series, is halfway between sci-fi harbormaster monitoring software and narrative tracking."
								},
								{
										id: 3,
										src: IntoInfinity,
										url: "http://intoinfinity.herokuapp.com/",
										desc: "Into Infinity was also built with Python/Django as a mob-coding project. This space-exploration and teaching app is sized to the solar system, but scalable beyond, and tracks missions and objects in space."
								},
								{
										id: 4,
										src: GiveYourAll,
										url: "http://giveyourall.herokuapp.com/",
										desc: "Developed out of a personal interest in charity, Give Your All searches an API for charity data and totals up orders for donation amounts; such a design could conceivably handle/anonymize donations through Stripe or similar software"
								},
								{
										id: 5,
										src: MoneyPal,
										url: "https://pensive-goodall-ea0925.netlify.app/",
										desc: "Developed in a February 2022 Hackathon with a team of UX/UI designers and fellow engineers, Money Pal offers advice on a user's finances—and preserves anonymity by way of a front-end-only design."
								}
						];

    return <div className="ProjectCarousel">
								<Carousel>
												{projectList.map((p) => {
																return (
																				<Carousel.Item key={p.id}>
																							 <img className="projectImg" src={p.src} alt="{p.src}"/>
																								<Carousel.Caption>
																												<h6><a href={p.url}>{p.desc}</a></h6>                            
																								</Carousel.Caption>
																				</Carousel.Item>
																)
												})}
        </Carousel>
    </div>;

}