

import React, { useState } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import {useNavigate} from 'react-router-dom'
const Booking = ({ tour }) => {
  const { money, avgRating ,price} = tour;
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    userId: '01',
    userEmail: 'example@gmail.com',
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: ''
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setCredentials(prev => ({ ...prev, [id]: value }));
  };

  let serviceGst = 135;
  // let money = Number(price)
  // console.log(money);
  let originalAmount = money
  let noOfGuests = parseInt(credentials.guestSize);
  let Amount =(originalAmount*noOfGuests)
  const Total= Amount + serviceGst;
  console.log(Total);






  const handleClick = e => {
    e.preventDefault();
    // console.log(credentials);
    navigate("/thankyou")
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>₹{price} <span>/per person</span></h3>
        <h4>{avgRating}<i style={{ color: 'orange' }} className="ri-star-fill"></i></h4>
      </div>
      <div className="booking__form">
        <h5>Information</h5>
        <Form className='booking__info-form' onSubmit={handleClick}>
          <FormGroup>
            <TextField id="fullName" label="Enter your name" variant="standard" required onChange={handleChange} type='text' />
          </FormGroup>
          <FormGroup>
            <TextField id="phone" label="Phone number" variant="standard" required onChange={handleChange}  type='number'/>
          </FormGroup>
          <FormGroup className='d-flex align-items-center justify-content-between gap-3'>
            <input type="date" id='bookAt' required onChange={handleChange} />
            <TextField id="guestSize" label="No. Of Guests" variant="standard" onChange={handleChange} required  type='number'/>
          </FormGroup>
          <Button type="submit" className='btn primary__btn w100 mt-4 form-control'>Book Now</Button>
        </Form>
      </div>
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className='border-0 px-0'>
            <h5 className='d-flex align-items-center gap-1'>
              ₹{price}<i className="ri-close-line"></i>1 person</h5>
            <span>₹{price}</span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0'>
            <h5>Service Charge + GST</h5>
            <span>₹{serviceGst}</span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0 total'>
            <h5>Total</h5>
            <span>₹{Total}</span>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
};

export default Booking;
