import { Link } from "react-router-dom"
import { EyeIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import './Projects.css';

const Projects = () => {

    const projectDetails = [
        {
            projectImg: "/public/assets/meetup.svg",
            projectName: "Meetup App",
            projectDescription: "A full-stack event management app that lets users browse events, search by tags or titles, filter by event type, and view detailed info including speakers and venue details.",
            projectskills: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "Bootstrap"],
            githubLink: "https://github.com/Sharu2003-27/meetup_frontend.git",
            hostedLink: "https://meetup-frontend-xi.vercel.app"
        },
         {
            projectImg: "/public/assets/e-commerce.svg",
            projectName: "E-commerce App",
            projectDescription: "A modern e-commerce furniture store with a responsive UI where users can browse and filter items, view detailed product pages, search, manage a shopping cart, and complete a checkout.",
            projectskills: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "Bootstrap"],
            githubLink: "https://github.com/Sharu2003-27/furniture_frontend.git",
            hostedLink: "https://furniture-frontend-six.vercel.app"
        },
         {
            projectImg: "/public/assets/anvaya.svg",
            projectName: "Anvaya CRM",
            projectDescription: "A lead management CRM designed for sales teams to efficiently manage leads, sales agents, comments, and reports.",
            projectskills: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "Bootstrap"],
            githubLink: "https://github.com/Sharu2003-27/anvaya_frontend.git",
            hostedLink: "https://anvaya-frontend-rust.vercel.app"
        },
         {
            projectImg: "/public/assets/job-posting.svg",
            projectName: "Job Posting App",
            projectDescription: "A full-stack job board application designed for companies to efficiently post and manage job openings, allowing candidates to search, view, and delete it.",
            projectskills: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "Bootstrap"],
            githubLink: "https://github.com/Sharu2003-27/jobPostingApp_fe.git",
            hostedLink: "https://job-posting-app-fe.vercel.app"
        },
    ]

    return (
        <>
        <div className="projects-container">
            <h1 className="projects-title">Projects</h1>
            <div className="row project-details">
                {
                   projectDetails.map((project, index) => (
                       <div key={index}>
                        <div className="card">
                            <img src={project.projectImg} alt={project.projectName} className="card-img-top" />
                            <div className="card-body">
                                 <h3 className="card-title"><strong>{project.projectName}</strong></h3>
                                 <p className="card-text">{project.projectDescription}</p>
                                 <div className="skills-row">
                                    {
                                       project.projectskills.map((skill) => (
                                       <span className="tag">{skill}</span>
                                     ))
                                    }
                                 </div>
                                 <div className="icons-row">
                                    <span className="icon"><EyeIcon className="icon-size" /> 
                                        <Link to={project.hostedLink} target="_blank">Demo</Link>
                                    </span>
                                    <span className="icon"><CodeBracketIcon className="icon-size" /> 
                                        <Link to={project.githubLink} target="_blank">Code</Link>
                                    </span>
                                 </div>
                            </div>
                        </div>
                       </div>
                   )) 
                 } 
            </div>
        </div>


         <hr className='line-one'/>
        </>
    );
};

export default Projects;
