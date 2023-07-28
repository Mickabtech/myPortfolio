import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import htmllogo from "../assets/img/html5-svg.svg"
import csslogo from "../assets/img/css-svg.svg"
import jslogo from "../assets/img/javascript-svg.svg"
import reactlogo from "../assets/img/reactjs-svg.svg"
import expresslogo from "../assets/img/express-js.svg"
import nodelogo from "../assets/img/nodejs-svg.svg"
import mongologo from "../assets/img/mongodb.svg"
import tailwindlogo from "../assets/img/tailwind.svg"


export const Slacks = () => {
    const responsive = {
      superLargeDesktop: {
    
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
        <section className="skill" id="slack">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Slacks</h2>
                            <p>Slacks I Use In Developing Amazing Applications</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={htmllogo} alt="Image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={csslogo} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={jslogo} alt="Image" />
                                    <h5>JAVASCRIPT</h5>
                                </div>
                                <div className="item">
                                    <img src={reactlogo} alt="Image" />
                                    <h5>ReactJS</h5>
                                </div>
                                <div className="item">
                                    <img src={nodelogo} alt="Image" />
                                    <h5>NodeJS</h5>
                                </div>
                                <div className="item">
                                    <img src={expresslogo} alt="Image" />
                                    <h5>ExpressJS</h5>
                                </div>
                                <div className="item">
                                    <img src={mongologo} alt="Image" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={tailwindlogo} alt="Image" />
                                    <h5>TailwindCss</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
      )
    }