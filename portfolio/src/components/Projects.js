import React from 'react';
import Project from './Project';

class Projects extends React.Component{
    render(){
        return(
            <section className="section-projects" id="section-projects">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary ">
                        Projects 
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        <Project
                            class="card__picture card__picture--1"
                            spanClass="card__heading-span  card__heading-span--1"
                            projectTitle="Insta Search"
                            skills={["ReactJS","Unsplash API","HTML","CSS"]}
                            projectDetails ="Insta Search Web App basically let's you 
                            Searchany picture you want just like the
                            Instagram Hashtag,the pictures are rendered
                            from the Unsplash API using:
                            Ajaxios and React to get all the responses."
                            projectLink="#"
                            backsideClass= "card__side card__side--back card__side--back--1"
                        />
                    </div>
                    <div className="col-1-of-3">
                    <Project
                            class="card__picture card__picture--2"
                            spanClass="card__heading-span  card__heading-span--2"
                            projectTitle="Word Pop Puzzle"
                            skills={["Unity","C# Programming","UI Design","Puzzle Algo"]}
                            projectDetails ="Insta Search Web App basically let's you 
                            Searchany picture you want just like the
                            Instagram Hashtag,the pictures are rendered
                            from the Unsplash API using:
                            Ajaxios and React to get all the responses."
                            projectLink="#"
                            backsideClass= "card__side card__side--back card__side--back--2"
                        />
                    </div>
                    <div className="col-1-of-3">
                    <Project
                            class="card__picture card__picture--3"
                            spanClass="card__heading-span  card__heading-span--3"
                            projectTitle="Currency Converter App"
                            skills={["Unity","C# Programming","UI Design","Currency API"]}
                            projectDetails ="Insta Search Web App basically let's you 
                            Searchany picture you want just like the
                            Instagram Hashtag,the pictures are rendered
                            from the Unsplash API using:
                            Ajaxios and React to get all the responses."
                            projectLink="#"
                            backsideClass= "card__side card__side--back card__side--back--3"
                        />
                    </div>                   
                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        <Project
                            class="card__picture card__picture--4"
                            spanClass="card__heading-span  card__heading-span--4"
                            projectTitle="Scrabble Puzzle"
                            skills={["Python","OOP","Terminal","Data Manipulation"]}
                            projectDetails ="Insta Search Web App basically let's you 
                            Searchany picture you want just like the
                            Instagram Hashtag,the pictures are rendered
                            from the Unsplash API using:
                            Ajaxios and React to get all the responses."
                            projectLink="#"
                            backsideClass= "card__side card__side--back card__side--back--4"
                        />
                    </div>
                    <div className="col-1-of-3">
                    <Project
                            class="card__picture card__picture--5"
                            spanClass="card__heading-span  card__heading-span--5"
                            projectTitle="Credit Card Validator"
                            skills={["C Language","Luhn Algo","Memory Management","Terminal App"]}
                            projectDetails ="Insta Search Web App basically let's you 
                            Searchany picture you want just like the
                            Instagram Hashtag,the pictures are rendered
                            from the Unsplash API using:
                            Ajaxios and React to get all the responses."
                            projectLink="#"
                            backsideClass= "card__side card__side--back card__side--back--5"
                        />
                    </div>
                    <div className="col-1-of-3">
                    <Project
                            class="card__picture card__picture--6"
                            spanClass="card__heading-span  card__heading-span--6"
                            projectTitle="State News"
                            skills={["Python | Flask","SQLite","Google Maps Api","Javascript","CSS"]}
                            projectDetails ="Insta Search Web App basically let's you 
                            Searchany picture you want just like the
                            Instagram Hashtag,the pictures are rendered
                            from the Unsplash API using:
                            Ajaxios and React to get all the responses."
                            projectLink="#"
                            backsideClass= "card__side card__side--back card__side--back--6"
                        />
                    </div>                   
                </div>
                <div className="u-center-text u-margin-top-huge">
                    <a href="https://github.com/chafiknaceri/" target="_blank" className="btn btn--blue"> All Projects</a>
                </div>

            </section>
        );
    }
}

export default Projects;