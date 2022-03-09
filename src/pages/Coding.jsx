import Navbar from '../components/Navbar.jsx';

export default function Coding(){

				return(
        <>
            <Navbar/>
												<div id="Coding" className="tabContent">
																<h3>Coding</h3>
																<p>Here are a sampling of the various types of projects I have developed, ranging from purely front-end to full MERN-stack.</p>
																<Carousel>
																		      <p className="codeProject">{projectList[0][0]}<img alt="" src={projectList[0][1]}/><a href={projectList[0][2]}>{projectList[0][3]}</a></p>
																		      <p className="codeProject">{projectList[1][0]}<img alt="" src={projectList[1][1]}/><a href={projectList[1][2]}>{projectList[1][3]}</a></p>
																		      <p className="codeProject">{projectList[2][0]}<img alt="" src={projectList[2][1]}/><a href={projectList[2][2]}>{projectList[2][3]}</a></p>
																		      <p className="codeProject">{projectList[3][0]}<img alt="" src={projectList[3][1]}/><a href={projectList[3][2]}>{projectList[3][3]}</a></p>
																		      <p className="codeProject">{projectList[4][0]}<img alt="" src={projectList[4][1]}/><a href={projectList[4][2]}>{projectList[4][3]}</a></p>
																		      <p className="codeProject">{projectList[5][0]}<img alt="" src={projectList[5][1]}/><a href={projectList[5][2]}>{projectList[5][3]}</a></p>
                </Carousel>
												</div>    
         </>
    )

}