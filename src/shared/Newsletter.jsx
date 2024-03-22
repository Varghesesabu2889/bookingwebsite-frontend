import React from 'react'
import './newsletter.css'
import {Container,Row,Col} from 'react-bootstrap'
import maleTourist from '../assets/images/smiley-woman-posing-her-baggage.png'
const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className='newsletter__content'>
                    <h2>Embark on a Journey of Discovery, Subscribe to Unlock India's Hidden Treasures!</h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder="Enter your email"/>
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>
                    <p>
                    Subscribe to our website today to unlock access to curated travel 
                    content, insider insights, and special promotions tailored to enhance
                     your exploration of India's rare and enchanting places. Join us on a 
                     journey of discovery and adventure as we uncover hidden treasures and share 
                     unforgettable experiences together.
                    </p>
                    </div>
                </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt="" width={"300px"} height={"400px"} />
                </div>
            </Col>

        </Row>
    </Container>
  </section>
}
export default Newsletter