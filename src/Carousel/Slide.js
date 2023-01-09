import React from "react";
import { Component } from "react";
import Slider from "react-slick";
import SearchFlightBlock from "../Home/components/SearchFlightBlock";
import leftArrow from "../images/leftArrow.png";
import rightArrow from "../images/rightArrow.png";

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  settings = {
    // dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay:true,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    // nextArrow:<Next next={this.next} />,
    // prevArrow:<Prev prev={this.previous}/>
    // arrow:true
    // ne
    // nextArrow:<NextArrow/>,
    // prevArrow:<PrevArrow/>
    // fade:t
  };
  classForSlide = [
    "homePageContainer",
    "homePageContainer2",
    "homePageContainer3",
  ];
  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    return (
      <>
        {/* <Next/> */}
        {/* <Prev/> */}
        {/* <div style={{display:"flex",justifyContent:"space-between", alignItems:"center",  position:"relative",top:"0",left:"0",zIndex:"55" ,border:"2px solid red",}}> */}

        <div
          style={{
            position: "absolute",
            left: "3rem",
            top: "35rem",
            zIndex: "4",
            cursor:"pointer"
          }}
        >
          <img src={leftArrow} onClick={this.previous} />
        </div>

        <div
          style={{
            position: "absolute",
            right: "3rem",
            top: "35rem",
            zIndex: "4",
            cursor:"pointer"
          }}
        >
          <img src={rightArrow} onClick={this.next} />
        </div>

        {/* </div> */}

        <div style={{ border: "1px dotted green", margin: 0 }}>
          <Slider {...this.settings} ref={(c) => (this.slider = c)}>
            {this.classForSlide.map((element, index) => {
              return (
                <div style={{margin:0,padding:0}} className="searchFlightWrapper" key={index}>
                  <SearchFlightBlock classForSlide={element} />
                  {/* {console.log(classForSlide+"slide")} */}
                </div>
              );
            })}

            {/* <div className="searchFlightWrapper">
                  <SearchFlightBlock />
                </div>
        
                <div className="searchFlightWrapper">
                  <SearchFlightBlock />
                </div> */}
            {/* <SearchFlightBlock/> */}
          </Slider>
        </div>
      </>
    );
  }
}

// export default Slide;
