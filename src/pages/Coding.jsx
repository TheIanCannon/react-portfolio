import Navbar from '../components/Navbar.jsx';
import GiveYourAll from '../media/img/GiveYourAll.png';
import OneArmedBandit from '../media/img/OneArmedBandit.png';
import Palanthas from '../media/img/Palanthas.png';
import IntoInfinity from '../media/img/IntoInfinity.png';
import ShipCollector from '../media/img/ShipCollector.png';

export default function Coding(){

				const projectList = [
						[
								"One-Armed Bandit",
								{OneArmedBandit},
								"http://theiancannon.github.io/GA-Project1-SlotMachine/",
								"An HTML/CSS/JS-based slot machine with animated *.gif reels and contextual sound effects"
						],
						[
								"Palanthas",
								{Palanthas},
								"http://project-palanthas.herokuapp.com/",
								"Developed in MongoDB/Express/Node for collecting, reviewing, and rating books"
						],
						[
								"Ship Collector",
								{ShipCollector},
								"http://shipcollector.herokuapp.com/",
								"Created using Python/Django and based on The Expanse series, halfway between sci-fi harbormaster monitoring software and narrative tracking for fans."
						],
						[
								"Into Infinity",
								{IntoInfinity},
								"http://intoinfinity.herokuapp.com/",
								"Also built with Python/Django as a mob-coding project, this space-exploration and teaching app is sized to the solar system, but scalable beyond, and tracks missions and objects in space"
						],
						[
								"Give Your All",
								{GiveYourAll},
								"http://giveyourall.herokuapp.com/",
								"This app searches an API for charity data and totals up orders for donation amounts; such a design could conceivably handle/anonymize donations through Stripe or similar software"
						]
				];

				let p = 0;
				let pTitle = document.getElementById("pTitle");
				pTitle.innerText = projectList[p][0];
				let pImg = document.getElementById("pImg");
				pImg.src = projectList[p][1];
				let pLink = document.getElementById("pLink");
				pLink.href = projectList[p][2];
				let pDesc = document.getElementById("pDesc");
				pDesc.innerText = projectList[p][3];

				function clickPrev(e) {
        e.preventDefault();
								p--;
								if (p < 0) {
										p = projectList.length - 1;
								}
								pTitle.innerText = projectList[p][0];
								pImg.src = projectList[p][1];
								pLink.href = projectList[p][2];
								pDesc.innerText = projectList[p][3];
				}
				function clickNext(e) {
        e.preventDefault();
								p++;
								if (p > projectList.length - 1) {
										p = 0;
								}
								pTitle.innerText = projectList[p][0];
								pImg.src = projectList[p][1];
								pLink.href = projectList[p][2];
								pDesc.innerText = projectList[p][3];
				}

    return(
        <>
            <Navbar/>
												<div id="Coding" class="tabContent">
																<h3>Coding</h3>
																<p>Here are a sampling of the various types of projects I have developed, ranging from purely front-end to full MERN-stack.</p>
																<div id="pList">
																				<div id="buttons-title">        
																								<button class="arrow" id="previous" onclick={ e => clickPrev(e)}>◄ Prev</button>
																								<p id="pTitle"></p>
																								<button class="arrow" id="next" onclick={e => clickNext(e)}>Next ►</button>
																				</div>
																				<div id="pDetail">
																								<a id="pLink" href="http://theiancannon.github.io/GA-Project1-SlotMachine/">
																												<img alt="OneArmedBandit" id="pImg" src="{OneArmedBandit}"/>
																												<p id="pDesc"></p>  
																								</a>			                       
																				</div>
																</div>
												</div>    
         </>
    )

}