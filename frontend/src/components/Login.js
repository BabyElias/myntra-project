import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      setError('');
      setMessage('');
      // Attempt to log in or sign up using external API
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      setMessage(response.data.message);
      navigate('/');
    } catch (error) {
      console.error('Error during login:', error);
      setError('Login failed');
    }
  };

  return (
    <div
      style={{
        width: '30%',
        margin: 'auto',
        marginTop: '10%',
        marginBottom: '3%',
        borderRadius: '2%',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        padding: '1%',
      }}
    >
      <Container>
        <img
          style={{ width: '100%', marginBottom: '5%' }}
          alt="myntra logo"
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/3/16/d4edb37c-aee8-4989-86f4-33b117edd4bc1647415464555-Banner_Login-Landing-page--1-.jpg"
        ></img>
        <Card>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}

          <Card.Body>
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button
                className="w-100"
                type="submit"
                style={{
                  backgroundColor: 'rgb(244,28,178)',
                  border: 'none',
                  marginTop: '5%',
                }}
              >
                Log In 
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </Container>
    </div>
  );
};

export default Login;