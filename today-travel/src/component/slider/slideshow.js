import React, { Component } from 'react';

class Slideshow extends Component {
    render() {
        return (
            <div>
            <div className="slideshow-container">
              <div className="mySlides fade">
                <div className="numbertext">1 / 5</div>
                <img src="images/slideshow1.jpg" style={{width: '100%'}} />
                <div className="text">Caption Text</div>
              </div>

              <div className="mySlides fade">
                <div className="numbertext">2 / 5</div>
                <img src="images/slideshow2.jpg" style={{width: '100%'}} />
                <div className="text">Caption Two</div>
              </div>

              <div className="mySlides fade">
                <div className="numbertext">3 / 5</div>
                <img src="images/slideshow3.jpg" style={{width: '100%'}} />
                <div className="text">Caption Three</div>
              </div>

              <div className="mySlides fade">
                <div className="numbertext">4 / 5</div>
                <img src="images/slideshow4.jpg" style={{width: '100%'}} />
                <div className="text">Caption Three</div>
              </div>

              <div className="mySlides fade">
                <div className="numbertext">5 / 5</div>
                <img src="images/slideshow5.jpg" style={{width: '100%'}} />
                <div className="text">Caption Three</div>
              </div>

              <a className="prev" onclick="plusSlides(-1)">❮</a>
              <a className="next" onclick="plusSlides(1)">❯</a>
            </div>
            <br />
            <div style={{textAlign: 'center'}}>
              <span className="dot" onclick="currentSlide(1)" />
              <span className="dot" onclick="currentSlide(2)" />
              <span className="dot" onclick="currentSlide(3)" />
              <span className="dot" onclick="currentSlide(4)" />
              <span className="dot" onclick="currentSlide(5)" />
            </div>
          </div>
        );
    }
}

export default Slideshow;
