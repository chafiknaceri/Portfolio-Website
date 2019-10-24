import React from 'react';
import FeatureBox from './FeatureBox';

class Skills extends React.Component{
    constructor(props){
        super(props);
        this.skills = ["HTML","CSS","Javascript","React"]
    }
    
    render(){
        return(
            <section className="section-skills">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary skill-heading-w">
                        Skills
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-4">


                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-webpage"></i>
                            <h3 className="third-heading u-margin-bottom-small"> Front-End Stack</h3>
                            <p className="feature-box__text">
                                HTML <br/> CSS <br/> JAVASCRIPT <br/> REACT <br/> SASS
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">


                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-share"></i>
                            <h3 className="third-heading u-margin-bottom-small"> Back-End Stack</h3>
                            <p className="feature-box__text">
                            PYTHON<br/> NODE <br/> C++ <br/> DJANGO <br/> FLASK
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">


                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-server2"></i>
                            <h3 className="third-heading u-margin-bottom-small">Databases</h3>
                            <p className="feature-box__text">
                            MYSQL <br/> SQLITE <br/> MANGODB <br/> <br/> <br/>
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">


                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-server2"></i>
                            <h3 className="third-heading u-margin-bottom-small">Game Development</h3>
                            <p className="feature-box__text">
                            UNITY | C# <br/> LUA <br/> P5 (Javascript) <br/> C++
                            </p>
                        </div>
                    </div>

                </div>

            </section>

            
        );
    }
}

export default Skills;