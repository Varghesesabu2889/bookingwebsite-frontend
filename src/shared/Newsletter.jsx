import React from 'react'
import './newsletter.css'
import {Container,Row,Col} from 'react-bootstrap'
import maleTourist from '../assets/images/male-tourist.png'
const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className='newsletter__content'>
                    <h2>Subscribe now to get useful traveling information</h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder="Enter your email"/>
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                         elit. Vitae aliquam maiores numquam placeat, consequuntur 
                         pariatur molestiae earum, sequi, inventore debitis adipisci velit? 
                         Exercitationem, deleniti. Voluptatem dolorum nostrum aliquid sit omnis.
                    </p>
                    </div>
                </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt="" />
                </div>
            </Col>

        </Row>
    </Container>
  </section>
}
export default Newsletter