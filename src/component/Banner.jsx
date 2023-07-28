import React from 'react'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Frontend Enginner", "Backend Engineer", "Frontend Developer", "Software Developer", "Fullstack Web Developer"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])

      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }
    

  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7} >
                    <span className='tagline'>Welcome to my portfolio</span>
                    <h1>{"Hi I'm Agboola Michael Olamide"}<span className='wrap'>  Software Engineer</span></h1>
                    <p>A skilled, passionate and dedicated software engineer with a love for crafting elegant solutions to complex problems. With a background in Mathematics and Computer Science, I thrive on turning innovative ideas into functional and user-friendly applications whilst working on several stack including and not limited to HTML, CSS, JAVASCRIPT, REACT, NODEJS, EXPRESSJS, MONGODB.</p>
                    <button onClick={() => console.log('connect')}> Let's connect <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5} >
                    <img src={headerImg} alt="Header Img"  />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

