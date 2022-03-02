import Navbar from '../components/Navbar.jsx';
import aws48 from '../media/img/aws48.png';
import css48 from '../media/img/css48.png';
import django48 from '../media/img/django48.png';
import git48 from '../media/img/git48.png';
import html48 from '../media/img/html48.png';
import javascript48 from '../media/img/javascript48.png';
import mongodb48 from '../media/img/mongodb48.png';
import node48 from '../media/img/node48.png';
import python48 from '../media/img/python48.png';
import react48 from '../media/img/react48.png';

export default function Career(){

    return(
        <>
            <Navbar/>
												<div id="Career" className="tabContent">
																<h3>Career</h3>
																				<p className="myTraining">My training in full-stack software engineering with General Assembly's immersive program has given me familiarity with a range of coding and software development technologies.<br/>
																								<p className="TechSkills"><img className="techSkill" alt="" src={html48}/> <img className="techSkill" alt="" src={javascript48}/> <img className="techSkill" alt="" src={css48}/> <img className="techSkill" alt="" src={python48}/> <img className="techSkill" alt="" src={git48}/> </p>
																								<p className="TechSkills"><img className="techSkill" alt="" src={django48}/> <img className="techSkill" alt="" src={mongodb48}/> <img className="techSkill" alt="" src={react48}/> <img className="techSkill" alt="" src={aws48}/> <img className="techSkill" alt="" src={node48}/> </p>																								
																				</p>
																    <p className="professionalWriter">As a professional writer and editor, I have had the honor of working with titles licensed from companies including Disney/Marvel, HBO, ViacomCBS, Ubisoft, and many more.
																    <p>My past experience runs the gamut from customer service, to education as a university-level tutor, to EMS work including EMT-FTO and Firefighting certification.</p>
																    </p>
																    <p>
																    <a href="mailto: ian.cannon@protonmail.com">Resume</a>&nbsp;available upon request,	or visit my <a href="https://www.linkedin.com/in/theiancannon/">LinkedIn</a> page for further details.</p>
												</div> 
        </>   
    )

}