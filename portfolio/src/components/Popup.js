import React from 'react';
import instasearchvid from '../images/instasearchvid.mov';


const Popup = () =>{
    return(
        <div className="popup">
            <div className="popup__content">
                <div className="popup__left">
                    <video className="popup__vid" loop="loop" autoplay="autoplay" muted="muted">
                        <source src={instasearchvid} type="video/mp4" />
                            Video not supported on Your Browser
                    </video>
                </div>
                <div className="popup__right">
                    <h2 className="heading-secondary u-margin-bottom-small">
                        Insta Search
                    </h2>
                    <h3 className="third-heading u-margin-bottom-small"> Features</h3>
                    <p className="popup__text">
                        This Web apps lets users Get any type of image they need
                        This Web apps lets users Get any type of image they need
                        This Web apps lets users Get any type of image they need
                        This Web apps lets users Get any type of image they need

                    </p>
                    <a href="#" className="btn btn--blue popop__btn">Source Code</a>
                </div>
            </div>

        </div>
    );
}
export default Popup;