import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css'; // Make sure the path to your CSS file is correct
import loginImg from '../assets/images/register.png'; // Assuming these are your image imports
import userImg from '../assets/images/user.png';
import TextField from '@mui/material/TextField';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
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
                <img src={loginImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userImg} alt="" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <TextField style={{backgroundColor:"white"}} id="email" placeholder="Enter Your Email" variant="filled" type='email' required onChange={handleChange} className='form-control'/>
                  </FormGroup> <br />
                  <FormGroup>
                    <TextField style={{backgroundColor:"white"}} id="password" placeholder="Enter Your password" variant="filled" type='password' required onChange={handleChange} className='form-control' />
                  </FormGroup> <br />&nbsp;&nbsp;&nbsp;
                  <Button className='btn auth__btn' type='submit' onClick={handleClick}>Login</Button>
                </Form> <br />
                <p style={{color:"white"}}>Don't have an account ? <Link style={{color:"black", textDecoration: "none" }} to={'/register'}>Create</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;
