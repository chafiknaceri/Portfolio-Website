import React from 'react';
import JavaScriptLogo from '../images/JavaScriptLogo.png';
import PythonLogo from '../images/PythonLogo.png';
import CLogo from '../images/CLogo.png';
class About extends React.Component{
    render(){
        return(
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        I just Love Building Cool Stuff
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="third-heading u-margin-bottom-small">Some of My Faveorite Tech Stack</h3>
                        <p className="paragraph">
                            I just love cofing in Python , JavaScript and  most of their important
                            Frame Works Such as <strong>Django</strong>,<strong>React</strong>
                        </p>
                        <h3 className="third-heading u-margin-bottom-small">Some of My Faveorite Tech Stack</h3>
                        <p className="paragraph">
                            I just love cofing in Python , JavaScript and  most of their important
                            Frame Works Such as <strong>Django</strong>,<strong>React</strong>
                        </p>
                        <a href="#" className=" btn btn-text"> Go To Projects &darr; </a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={JavaScriptLogo} className="composition__photo composition__photo--p1" alt="javascript logo"/>
                            <img src={PythonLogo} className="composition__photo composition__photo--p2" alt="python logo"/>
                            <img src={CLogo} className="composition__photo composition__photo--p3" alt="react logo"/>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;