import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css'; // Make sure the path to your CSS file is correct
import registerImg from '../assets/images/register.gif'; // Assuming these are your image imports
import userImg from '../assets/images/user.png';
import TextField from '@mui/material/TextField';
const Register = () => {
  const [, setCredentials] = useState({
    userName:undefined,
    email: undefined,
    password: undefined,
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setCredentials(prev => ({ ...prev, [id]: value }));
  };

  const handleClick = e => {
    e.preventDefault();
    // Add your logic for handling the login button click
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userImg} alt="" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                <FormGroup>
                    <TextField style={{backgroundColor:"white"}} id="username" placeholder="Enter Your Name" variant="standard" type='text' required onChange={handleChange} className='form-control' />
                  </FormGroup> <br />
                  <FormGroup>
                    <TextField style={{backgroundColor:"white"}}  id="email"  placeholder="Enter Your Email" variant="standard" type='email' required onChange={handleChange} className='form-control'/>
                  </FormGroup> <br />
                  <FormGroup>
                    <TextField style={{backgroundColor:"white"}} id="password" placeholder="Enter Your password" variant="standard" type='password' required onChange={handleChange} className='form-control' />
                  </FormGroup> <br />&nbsp;&nbsp;&nbsp;
                  <Button className='btn auth__btn' type='submit' onClick={handleClick}>Register</Button>
                </Form> <br />
                <p style={{color:"white"}}>Already have an account ? <Link style={{color:"black", textDecoration: "none" }} to={'/login'}>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Register;
