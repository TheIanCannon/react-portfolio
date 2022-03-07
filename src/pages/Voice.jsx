import Navbar from '../components/Navbar.jsx';
import bunker from '../media/av/bunker.mp4';
import balance from '../media/av/balance.mp4';
import worms from '../media/av/worms.mp4';
import tightrope from '../media/av/tightrope.mp4';
import sardines from '../media/av/sardines.mp4';
import tracheotomy from '../media/av/tracheotomy.mp4';
import mountain from '../media/av/mountain.mp4';
import bear from '../media/av/bear.mp4';
import croc from '../media/av/croc.mp4';
import tuna from '../media/av/tuna.mp4';
import Video from 'react-native-video';

export default function Voice(){

				const voSamples = [
								[{bunker}, "Stock a Bunker!"],
								[{balance}, "Balance a Bike Wheel!"],
								[{worms}, "Buzz Worms for Bait!"],
								[{tightrope}, "Ride On a Tightrope!"],
								[{sardines}, "Survive with Sardines!"],
								[{tracheotomy}, "DIY Tracheotomy!"],
								[{mountain}, "Scare Off a Mountain Lion!"],
								[{bear}, "Survive a Bear Attack!"],
								[{croc}, "What a Croc!"],
								[{tuna}, "Gaff a Tuna!"]
				];
				
				let i = 0;
				let vidTitle = document.getElementById("vidTitle");
				vidTitle.innerText = voSamples[i][1];
				let vidLink = document.getElementById("voArray");
				vidLink.innerHTML("src", voSamples[i][0]);
				
				function clickDown(e) {
        e.preventDefault();
								i--;
								if (i < 0) {
										i = voSamples.length - 1;
								}
								vidTitle.innerText = voSamples[i][1];
								vidLink.innerHTML("src", voSamples[i][0]);
				}
				function clickUp(e) {
        e.preventDefault();
								i++;
								if (i > voSamples.length - 1) {
										i = 0;
								}
								vidTitle.innerText = voSamples[i][1];
								vidLink.innerHTML("src", voSamples[i][0]);
				}

				return(
        <>
            <Navbar/>
												<div id="Voice" className="tabContent">
																<h3>Voice</h3>
																<p>Some years ago, at the suggestions of colleagues, I studied a few courses with <a href="http://www.voiceone.com">Voice One</a> and lent my vocal training and talents to a series of marketing promos for several of Weldon Owen's books.</p>
																<p>Production values were somewhere between "modest" and "DIY", but the marketing team managed to make it work, and it was a good way to demonstrate some range and show off a few titles I'd taken part in creating.</p>
																<div id="voList">
																				<div id="buttons-title">        
																								<button className="arrow" id="previous" onclick={e => clickDown(e)}>◄ Prev</button>
																								&nbsp;&nbsp;<p id="vidTitle"></p>&nbsp;&nbsp;
																								<button className="arrow" id="next" onclick={e => clickUp(e)}>Next ►</button>
																    </div>
																<span id="vidPlay">
																				<video id="voArray" src="" height="480" width="640" controls="controls">												
																								Your browser does not support HTML video.
																				</video>
																</span>   
												    </div>
            </div>
        </>
				)

}