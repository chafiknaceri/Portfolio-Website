import React from 'react';
import instasearchvid from '../images/instasearchvid.mov';


const Popup = () =>{
    return(
        <div>
        <div className="popup" id="popup">
            <div className="popup__content ">
                <div className="popup__left">
                    <video className="popup__vid" loop="loop" autoplay="autoplay" muted="muted">
                        <source src={instasearchvid} type="video/mp4" />
                            Video not supported on Your Browser
                    </video>
                </div>
                <div className="popup__right">
                    <a href="#section-projects" className="popup__close">&times;</a>
                    <h2 className="heading-secondary u-margin-bottom-small">
                        Insta Search
                    </h2>
                    <h3 className="third-heading u-margin-bottom-small"> Features</h3>
                    <p className="popup__text">
                        This Web apps lets users Get any type of image they need
                        This Web apps lets users Get any type of image they need
                        This Web apps lets users Get any type of image they need
                        This Web apps lets users Get any type of image they need
                        This Web apps lets users Get any type of image they need
                        This Web apps lets users Get any type of image they need
                        This Web apps lets users Get any type of image they need
                        This Web apps lets users Get any type of image they need
                        This Web apps lets users Get any type of image they need
                        
                    </p>
                    <a href="#" className="btn btn--blue popop__btn">Source Code</a>
                </div>
            </div>

        </div>
      <div className="popup--2" id="popup--2">
      <div className="popup--2__content ">
          <div className="popup--2__left">
              <video className="popup--2__vid" loop="loop" autoplay="autoplay" muted="muted">
                  <source src={instasearchvid} type="video/mp4" />
                      Video not supported on Your Browser
              </video>
          </div>
          <div className="popup--2__right">
              <a href="#section-projects" className="popup--2__close">&times;</a>
              <h2 className="heading-secondary u-margin-bottom-small">
                  Word Pop Puzzle
              </h2>
              <h3 className="third-heading u-margin-bottom-small"> Unity,C#,Puzzle Algo,UI Design</h3>
              <p className="popup--2__text">
  
                   Casual Word Puzzle Game
                  
              </p>
              <a href="#" className="btn btn--blue popup--2__btn">Source Code</a>
          </div>
      </div>

  </div>
  <div className="popup--3" id="popup--3">
      <div className="popup--3__content ">
          <div className="popup--3__left">
              <video className="popup--3__vid" loop="loop" autoplay="autoplay" muted="muted">
                  <source src={instasearchvid} type="video/mp4" />
                      Video not supported on Your Browser
              </video>
          </div>
          <div className="popup--3__right">
              <a href="#section-projects" className="popup--3__close">&times;</a>
              <h2 className="heading-secondary u-margin-bottom-small">
              Currency Converter App
              </h2>
              <h3 className="third-heading u-margin-bottom-small"> Unity , C# ,APIS</h3>
              <p className="popup--3__text">
  
                    Convert Any Currency in Real time on your phone
                  
              </p>
              <a href="#" className="btn btn--blue popop--3__btn">Source Code</a>
          </div>
      </div>

  </div>
  <div className="popup--4" id="popup--4">
      <div className="popup--4__content ">
          <div className="popup--4__left">
              <video className="popup--4__vid" loop="loop" autoplay="autoplay" muted="muted">
                  <source src={instasearchvid} type="video/mp4" />
                      Video not supported on Your Browser
              </video>
          </div>
          <div className="popup--4__right">
              <a href="#section-projects" className="popup--4__close">&times;</a>
              <h2 className="heading-secondary u-margin-bottom-small">
                  Scrabble Puzzle 
              </h2>
              <h3 className="third-heading u-margin-bottom-small"> Python , Data Manipulation Terminal App</h3>
              <p className="popup--4__text">
  
                    Play Scrabble Against the Computer on the terminal and try to win as much points as you can
                  
              </p>
              <a href="#" className="btn btn--blue popup--4__btn">Source Code</a>
          </div>
      </div>

  </div>
  <div className="popup--5" id="popup--5">
      <div className="popup--5__content ">
          <div className="popup--5__left">
              <video className="popup--5__vid" loop="loop" autoplay="autoplay" muted="muted">
                  <source src={instasearchvid} type="video/mp4" />
                      Video not supported on Your Browser
              </video>
          </div>
          <div className="popup--5__right">
              <a href="#section-projects" className="popup--5__close">&times;</a>
              <h2 className="heading-secondary u-margin-bottom-small">
                  Credit card Validator
              </h2>
              <h3 className="third-heading u-margin-bottom-small"> C Language , Terminal App , Lauhn Algo</h3>
              <p className="popup--5__text">
  
                    Make sure the card is not fake and also know exactly what type of card : VISA | MASTERCARD | AMERICAN EXPRESS
                  
              </p>
              <a href="#" className="btn btn--blue popop--5__btn">Source Code</a>
          </div>
      </div>

  </div>
  

  
  <div className="popup--6" id="popup--6">

      <div className="popup--6__content ">
          <div className="popup--6__left">
              <video className="popup--6__vid" loop="loop" autoplay="autoplay" muted="muted">
                  <source src={instasearchvid} type="video/mp4" />
                      Video not supported on Your Browser
              </video>
          </div>
          <div className="popup--6__right">
            <a href="#section-projects" className="popup--5__close">&times;</a>
              <h2 className="heading-secondary u-margin-bottom-small">
                    Map News
              </h2>
              <h3 className="third-heading u-margin-bottom-small"> Find News in your State</h3>
              <p className="popup--6__text">
  
              Python | Flask | Javascript | Google API | Sqlite
                  
              </p>
              <a href="#" className="btn btn--blue popop--6__btn">Source Code</a>
          </div>
      </div>
     

  </div>

  </div>

    );
}
export default Popup;