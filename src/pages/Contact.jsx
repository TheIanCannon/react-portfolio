import pm from '../media/img/pm.png';
import github from '../media/img/github.png';
import linkedin from '../media/img/linkedin.png';
import Navbar from '../components/Navbar.jsx';

export default function Contact(){

    return(
        <>
            <Navbar/>
												<div id="Contact" className="tabContent">
																<h3>Contact</h3>
																<p>Questions?</p>
																<p>Comments?</p>
																<p>Reach out to me!</p>
																<a href="https://www.linkedin.com/in/theiancannon/"><img alt="LinkedIn" className="Icon" id="LinkedIn" src={linkedin} /></a><a href="https://github.com/TheIanCannon/"><img alt="GitHub" className="Icon" id="GitHub" src={github} /></a><a href="mailto: ian.cannon@protonmail.com"><img alt="ProtonMail" className="Icon" id="ProtonMail" src={pm} /></a>
																<footer id="copyright">
																				<h6>
																								Copyright &copy; 2021-<script>document.write(new Date().getFullYear())</script> (The) Ian Cannon. All Rights Reserved.
																				</h6>
																</footer>
												</div>
        </>
    )

}