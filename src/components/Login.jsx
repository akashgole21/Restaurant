import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios'; // Assuming axios is installed for API calls
import NavBarManu from './NavBarManu ';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Simulate fetching user data from an API (replace with your actual API call)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/login'); // Replace with your API endpoint
        const users = response.data;
        // Store user data for login validation (replace with your logic)
        // For example, store usernames in an array:
        // const validUsernames = users.map(user => user.username);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', {
        name,
        password,
      }); // Replace with your API endpoint and data format

      if (response.data.success) { // Check for success response from API
        setIsLoggedIn(true);
        localStorage.setItem('login', JSON.stringify(response.data)); // Store login status
        console.log('Login successful!');
        // Redirect to lists page (replace with your desired redirection)
        // You can use a navigation library like react-router-dom for this
      } else {
        setErrorMessage(response.data.message || 'Login failed'); // Handle API error messages
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred. Please try again.'); // Generic error message for user
    }
  };

  return (
    <>
      <NavBarManu />
      <Container>
        <Row>
          <Col>
            <h1 style={{ margin: '40px 0px 20px' }}>Login</h1>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="enter name"
                name="user"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <br />
              <br />
              <input
                type="password"
                placeholder="enter password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <br />
              <br />
              <button type="submit">Login</button>
              {errorMessage && <div className="error-message">{errorMessage}</div>}
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
