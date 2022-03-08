import Navbar from '../components/Navbar.jsx';

import Carousel from 'react-elastic-carousel';

import GiveYourAll from '../media/img/GiveYourAll.png';
import OneArmedBandit from '../media/img/OneArmedBandit.png';
import Palanthas from '../media/img/Palanthas.png';
import IntoInfinity from '../media/img/IntoInfinity.png';
import ShipCollector from '../media/img/ShipCollector.png';
import MoneyPal from '../media/img/MoneyPal.png';

export default function Coding(){

				const projectList = [
						[
								"One-Armed Bandit",
								OneArmedBandit,
								"http://theiancannon.github.io/GA-Project1-SlotMachine/",
								"An HTML/CSS/JS-based slot machine with animated *.gif reels and contextual sound effects"
						],
						[
								"Palanthas",
								Palanthas,
								"http://project-palanthas.herokuapp.com/",
								"Developed in MongoDB/Express/Node for collecting, reviewing, and rating books"
						],
						[
								"Ship Collector",
								ShipCollector,
								"http://shipcollector.herokuapp.com/",
								"Created using Python/Django and based on The Expanse series, halfway between sci-fi harbormaster monitoring software and narrative tracking for fans."
						],
						[
								"Into Infinity",
								IntoInfinity,
								"http://intoinfinity.herokuapp.com/",
								"Also built with Python/Django as a mob-coding project, this space-exploration and teaching app is sized to the solar system, but scalable beyond, and tracks missions and objects in space"
						],
						[
								"Give Your All",
								GiveYourAll,
								"http://giveyourall.herokuapp.com/",
								"This app searches an API for charity data and totals up orders for donation amounts; such a design could conceivably handle/anonymize donations through Stripe or similar software"
						],
						[
								"Money Pal",
								MoneyPal,
								"https://pensive-goodall-ea0925.netlify.app/",
								"Developed in a February 2022 Hackathon with a team of UX/UI designers and fellow engineers, this simple financial analysis tool offers advice on a user's finances—and preserves anonymity by front-end-only design"
						]
				];

    return(
        <>
            <Navbar/>
												<div id="Coding" className="tabContent">
																<h3>Coding</h3>
																<p>Here are a sampling of the various types of projects I have developed, ranging from purely front-end to full MERN-stack.</p>
																<Carousel>
																		      <p className="codeProject">{projectList[0][0]}<img alt="" src={projectList[0][1]}/><a href={projectList[0][2]}>{projectList[0][3]}</a></p>
																		      <p className="codeProject">{projectList[1][0]}<img alt="" src={projectList[1][1]}/><a href={projectList[1][2]}>{projectList[1][3]}</a></p>
																		      <p className="codeProject">{projectList[2][0]}<img alt="" src={projectList[2][1]}/><a href={projectList[2][2]}>{projectList[2][3]}</a></p>
																		      <p className="codeProject">{projectList[3][0]}<img alt="" src={projectList[3][1]}/><a href={projectList[3][2]}>{projectList[3][3]}</a></p>
																		      <p className="codeProject">{projectList[4][0]}<img alt="" src={projectList[4][1]}/><a href={projectList[4][2]}>{projectList[4][3]}</a></p>
																		      <p className="codeProject">{projectList[5][0]}<img alt="" src={projectList[5][1]}/><a href={projectList[5][2]}>{projectList[5][3]}</a></p>
                </Carousel>
												</div>    
         </>
    )

}