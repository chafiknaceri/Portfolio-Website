import React from 'react';



const Project = (props) =>{
    
        const skills = props.skills.map((skill) =>{
            return <li> {skill} </li>
        });
    return(
        <div className="card">
            <div className="card__side card__side--front">
                <div className={props.class}>
                    
                </div>
                <h4 className="card__heading">
                    <span className={props.spanClass}>
                        {props.projectTitle}
                    </span>
                </h4>
                <div className="card__details">
                     <ul>
                        {skills}

                    </ul> 
                </div>
            </div>
            <div className={props.backsideClass}>
                <div className="card__cta">
                    <div className="card__project-box">
                        <p className="card__project-title">{props.projectTitle}</p>

                        <p className="card__project-details">
                            {props.projectDetails}
                        </p>

                    </div>
                    <a href={props.projectLink} className="btn btn--white"> View </a>
                </div>
            </div>
        </div>
    );
}


export default Project;