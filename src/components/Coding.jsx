import "App" from '../App.css';

export default function (){

				const projectList = [
						[
								"One-Armed Bandit",
								"../media/img/OneArmedBandit.png",
								"http://theiancannon.github.io/GA-Project1-SlotMachine/",
								"An HTML/CSS/JS-based slot machine with animated *.gif reels and contextual sound effects"
						],
						[
								"Palanthas",
								"../media/img/Palanthas.png",
								"http://project-palanthas.herokuapp.com/",
								"Developed in MongoDB/Express/Node for collecting, reviewing, and rating books"
						],
						[
								"Ship Collector",
								"../media/img/ShipCollector.png",
								"http://shipcollector.herokuapp.com/",
								"Created using Python/Django and based on The Expanse series, halfway between sci-fi harbormaster monitoring software and narrative tracking for fans."
						],
						[
								"Into Infinity",
								"../media/img/IntoInfinity.png",
								"http://intoinfinity.herokuapp.com/",
								"Also built with Python/Django as a mob-coding project, this space-exploration and teaching app is sized to the solar system, but scalable beyond, and tracks missions and objects in space"
						],
						[
								"Give Your All",
								"../media/img/GiveYourAll.png",
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

				function clickPrev() {
								p--;
								if (p < 0) {
										p = projectList.length - 1;
								}
								pTitle.innerText = projectList[p][0];
								pImg.src = projectList[p][1];
								pLink.href = projectList[p][2];
								pDesc.innerText = projectList[p][3];
				}
				function clickNext() {
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
								<div id="Coding" class="tabContent">
												<h3>Coding</h3>
												<p>Here are a sampling of the various types of projects I have developed, ranging from purely front-end to full MERN-stack.</p>
												<div id="pList">
																<div id="buttons-title">        
																				<button class="arrow" id="previous" onclick="clickPrev()">◄ Prev</button>
																				<h3 id="pTitle"></h3>
																				<button class="arrow" id="next" onclick="clickNext()">Next ►</button>
																</div>
																<div id="pDetail">
																				<a id="pLink" href="">
																								<img id="pImg" src=""/>
																								<p id="pDesc"></p>  
																				</a>			                       
																</div>
												</div>
								</div>    
    )

}