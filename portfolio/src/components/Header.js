import React from 'react';
import Logo from '../images/Logo.png';
import profile from '../images/profile.jpeg';

// import '../css/Header.css';

class Header extends React.Component{
    render(){
        return(
            <header className="header">
                <div className="header__logo-box">
                    <img className ="header__logo" src={Logo} alt="my Logo" />
                </div>
            <div className="header__header-box">
                <img className="header__profile-pic" src={profile}/>
                <h1 className="heading-text">
                    <span className="main--heading">Chafik Naceri</span>
                    <span className="second--main">Software Developer</span>
                </h1>
                <a href="#chafs" className="btn btn--white btn--animated">Checkout Projects</a>
            </div>

            </header>
        );
    }
}

export default Header;