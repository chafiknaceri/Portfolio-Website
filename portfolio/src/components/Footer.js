import React from 'react';
import Logo from '../images/Logo.png';

class Footer extends React.Component{
    render(){
        return(
            <footer className="footer">
                {/* <div className="footer__logo-box">
                    <img src={Logo} alt="logo" className="footer__logo"/>
                </div> */}
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="footer__navigation">
                            <ul className="footer__list">
                                <li className="footer__item"><a href="#" className="footer__link">Linkdin</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Github</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">LeetCode</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <div className="footer__copyright">
                            Built By <a href="#" className="footer__link"> Chafik Naceri</a> Copywrite &copy; By Chafik Naceri
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;