import React from 'react'
import '../styles/tour-details.css'
import {Container, Row, Col,Form,ListGroup} from "react-bootstrap";
import {useParams}  from 'react-router-dom';
import tourData from '../assets/data/tours'
const TourDetails = () => {

  const {id} = useParams()

  const tour = tourData.find(tour => tour.id === id)

const {photo, title, address, price, desc, city, distance, maxGroupSize } = tour

  return  <>
  <section>
    <Container>
      <Row>
        <Col lg='8'>
          <div className="tour__content">
            <img src={photo} alt="" />
            <div className="tour__info">
              <h2>{title}</h2>
              <div className="d-flex align-items-center gap-5">
                <span>
                <i class="ri-map-pin-user-fill"></i>{address}
                </span>
              </div>
              <div className="tour__extra-details">
                <span>
                <i class="ri-map-pin-2-line"></i>{city} &nbsp;&nbsp;&nbsp;
               <span>  <i class="ri-money-rupee-circle-line"></i>₹{price}/per person </span> &nbsp;&nbsp;&nbsp;
              <span>  <i class="ri-group-fill"></i>{maxGroupSize}</span>

                </span>
              </div>
              <h5>Description</h5>
              <p>{desc}</p>
            </div>  
          </div>
        </Col>
        {/* Booking */}
        <Col lg='4'>

        </Col>
      </Row>
    </Container>
  </section>
  </>
   
}

export default TourDetails