import Navbar from '../components/Navbar.jsx';
import Copyright from '../components/Copyright.jsx';

export default function Status(){

    return(
        <>
            <Navbar/>
												<div id="Status" className="tabContent">
																<h3>Status</h3>
																<ul className="buildPriorities">Current Portfolio Build Priorities:
																				<li>🗹 Improve responsive design for resizing and viewing</li>
																				<li>🗹 Add further media and work-related links (ongoing)</li>
																				<li>☐ Dark/Light mode switch</li>
																				<li>☐ React-based rebuild</li>
																				<li>☐ Tab and content custom design(?)</li>
																				<li>☐ TBD</li>
																</ul>      
																<ul className="otherObjectives">Other Objectives:
																				<li>🗹 Project polishing and redesigning (ongoing)</li>
																				<li>🗹 Various other practice (ongoing)</li>
																				<li>☐ DevOps</li>
																				<li>☐ UX/UI Development</li>
																				<li>☐ Cloud Development/Azure</li>
																</ul>
																<small>(n.b. This page will be under construction and revision as I continue to refine its design. Watch for more changes along the way!)</small>
												</div>
            <footer id="copyright">
												    <Copyright/>
												</footer>     
        </>
    )

}