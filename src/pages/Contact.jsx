import Navbar from '../components/Navbar.jsx';

export default function (){

    return(
        <>
            <Navbar/>
												<div id="Contact" class="tabContent">
																<h3>Contact</h3>
																<p>Questions?</p>
																<p>Comments?</p>
																<p>Reach out to me!</p>
																<a href="https://www.linkedin.com/in/theiancannon/"><img class="Icon" id="LinkedIn" src="https://i.imgur.com/wgXOLzq.png" /></a><a href="https://github.com/TheIanCannon/"><img class="Icon" id="GitHub" src="https://i.imgur.com/EYyBkA4.png?1" /></a><a href="mailto: ian.cannon@protonmail.com"><img class="Icon" id="ProtonMail" src="https://i.imgur.com/0ILiNSL.png?1" /></a>
																<footer id="copyright" style="text-align: center">
																				<h6>
																								Copyright &copy; 2021-<script>document.write(new Date().getFullYear())</script> (The) Ian Cannon. All Rights Reserved.
																				</h6>
																</footer>
												</div>
        </>
    )

}