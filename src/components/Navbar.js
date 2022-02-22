import "App" from '../../App.css';

export default function Navbar(){

				return(

								<div class="tabs">
												<button class="tabLinks" onclick="openTab(event, 'Welcome')" id="defaultTab">Welcome</button>    
												<button class="tabLinks" onclick="openTab(event, 'Status')">Status</button>    
												<button class="tabLinks" onclick="openTab(event, 'Career')">Career</button>    
												<button class="tabLinks" onclick="openTab(event, 'Coding')">Coding</button>    
												<button class="tabLinks" onclick="openTab(event, 'Writing')">Writing</button>    
												<button class="tabLinks" onclick="openTab(event, 'Voice')">Voice</button>    
												<button class="tabLinks" onclick="openTab(event, 'Contact')">Contact</button>    
								</div>

				)

}