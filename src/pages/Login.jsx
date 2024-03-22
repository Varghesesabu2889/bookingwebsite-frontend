import React, { useState } from 'react'
import {Container,Row, Col,Form,Button,FormGroup} from "react-bootstrap"
import { Link } from 'react-router-dom'
import '.././styles/login.css'
import loginImg from '../assets/images/login.jpg'
import userImg from '../assets/images/user.png'
import TextField from '@mui/material/TextField';

const Login = () => {


  const [credentials, setCredentials] = useState({
   email:undefined,
   password:undefined
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setCredentials(prev => ({ ...prev, [id]: value }));
  };
  const handleClick = e => {
    e.preventDefault();
  };
  return <section>
    <Container>
      <Row>
        <Col lg='8' className='m-auto'>
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={loginImg} alt="" />
              <div className="login__form">
                <div className="user">
                  <img src={userImg} alt="" />
                </div>
                <h2>Login</h2>

                <Form>
                  <FormGroup>
                  <TextField id="email" label="Enter Your Email" variant="standard" type='email' required onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                  <TextField id="password" label="Enter Your password" variant="standard" type='password' required onChange={handleChange} />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                </Form>
                <p>Don't have an account ? <Link to={'/register'}>Create</Link></p>
              </div>

            </div>

          </div>
           
        </Col>
      </Row>
    </Container>
  </section>
}

export default Login