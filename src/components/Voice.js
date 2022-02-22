import "App" from '../../App.css';

export default function Voice(){

				const voSamples = [
								["../media/av/bunker.mp4", "Stock a Bunker!"],
								["../media/av/balance.mp4", "Balance a Bike Wheel!"],
								["../media/av/worms.mp4", "Buzz Worms for Bait!"],
								["../media/av/tightrope.mp4", "Ride On a Tightrope!"],
								["../media/av/sardines.mp4", "Survive with Sardines!"],
								["../media/av/tracheotomy.mp4", "DIY Tracheotomy!"],
								["../media/av/mountain.mp4", "Scare Off a Mountain Lion!"],
								["../media/av/bear.mp4", "Survive a Bear Attack!"],
								["../media/av/croc.mp4", "What a Croc!"],
								["../media/av/tuna.mp4", "Gaff a Tuna!"]
				];
				
				let i = 0;
				let vidTitle = document.getElementById("vidTitle");
				vidTitle.innerText = voSamples[i][1];
				let vidLink = document.getElementById("voArray");
				vidLink.setAttribute("src", voSamples[i][0]);
				
				function clickDown() {
								i--;
								if (i < 0) {
										i = voSamples.length - 1;
								}
								vidTitle.innerText = voSamples[i][1];
								vidLink.setAttribute("src", voSamples[i][0]);
				}
				function clickUp() {
								i++;
								if (i > voSamples.length - 1) {
										i = 0;
								}
								vidTitle.innerText = voSamples[i][1];
								vidLink.setAttribute("src", voSamples[i][0]);
				}

				return(

								<div id="Voice" class="tabContent">
												<h3>Voice</h3>
												<p>Some years ago, at the suggestions of colleagues, I studied a few courses with <a href="http://www.voiceone.com">Voice One</a> and lent my vocal training and talents to a series of marketing promos for several of Weldon Owen's books.</p>
												<p>Production values were somewhere between "modest" and "DIY", but the marketing team managed to make it work, and it was a good way to demonstrate some range and show off a few titles I'd taken part in creating.</p>
												<div id="voList">
																<div id="buttons-title">        
																<button class="arrow" id="previous" onclick="clickDown()">◄ Prev</button>
																<h4 id="vidTitle"></h4>
																<button class="arrow" id="next" onclick="clickUp()">Next ►</button>
												</div>
												<span id="vidPlay">
																<video id="voArray" src="" height="480" width="640" controls="controls">												
																				Your browser does not support HTML video.
																</video>
												</span>   
								</div>

				)

}