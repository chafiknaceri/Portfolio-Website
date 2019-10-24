import React from 'react';

class FeatureBox extends React.Component{
    showallskills = () =>{
        for(let i= 0; i< this.props.skillText;i++){
            return  <p className="feature-box__text">
            {this.props.skillText[i]};
        </p>
        }
    }
    render(){
        return(
            <div className="feature-box">
                <i className={this.props.icon}></i>
                <h3 className="third-heading u-margin-bottom-small"> {this.props.title}</h3>
                {this.showallskills()}
            </div>
        )
    }
}
export default FeatureBox;