

import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/thankyou.css'
const ThankYou = () => {
  return  <section>
    <Container>
      <Row>
        <Col lg='12' className='pt-5 text-center'>
         <div className="thank__you">
          <span>
          <i class="fa-regular fa-square-check fa-beat-fade"></i>
          </span> 
          <h1 className="mb-3 fw-semibold">Thank You!</h1>
          <h3 className="mb-4">Your Tour is successfully booked...</h3>
          <Button className='btn primary__btn w-25'><Link to={"/home"}>Back to Home</Link></Button>
         </div>
        </Col>
      </Row>
    </Container>
  </section>
  
}

export default ThankYou