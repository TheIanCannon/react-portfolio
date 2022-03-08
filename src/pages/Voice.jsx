import Navbar from '../components/Navbar.jsx';
import VideoCarousel from '../components/VideoCarousel.jsx';

export default function Voice(){
						
				return(
        <>
            <Navbar/>
												<div id="Voice" className="tabContent">
																<h3>Voice</h3>
																<p>I've always enjoyed reading for others, and multiple times I've been told that I have a good voice for it. Some years ago, at the suggestions of colleagues, I studied a few courses with <a href="http://www.voiceone.com">Voice One</a> and lent my vocal training and talents to a series of marketing promos for several of Weldon Owen's books.</p>
																<p>Production values were somewhere between "modest" and "DIY", but Gonzalo Ferreyra and the marketing team at Weldon Owen managed to make it work, and it was a good way to demonstrate some range and show off a few titles I'd taken part in creating.</p>
																<div id="voList">
																		  <VideoCarousel/>
                        {/* <p className="voSample"><VideoPlayer src={voSamples[0][0]}/>{voSamples[0][1]}</p>
                        <p className="voSample"><VideoPlayer src={voSamples[1][0]}/>{voSamples[1][1]}</p>
                        <p className="voSample"><VideoPlayer src={voSamples[2][0]}/>{voSamples[2][1]}</p>
                        <p className="voSample"><VideoPlayer src={voSamples[3][0]}/>{voSamples[3][1]}</p>
                        <p className="voSample"><VideoPlayer src={voSamples[4][0]}/>{voSamples[4][1]}</p>
                        <p className="voSample"><VideoPlayer src={voSamples[5][0]}/>{voSamples[5][1]}</p>
                        <p className="voSample"><VideoPlayer src={voSamples[6][0]}/>{voSamples[6][1]}</p>
                        <p className="voSample"><VideoPlayer src={voSamples[7][0]}/>{voSamples[7][1]}</p>
                        <p className="voSample"><VideoPlayer src={voSamples[8][0]}/>{voSamples[8][1]}</p>
                        <p className="voSample"><VideoPlayer src={voSamples[9][0]}/>{voSamples[9][1]}</p>  */}
												    </div>
            </div>
        </>
				)

}