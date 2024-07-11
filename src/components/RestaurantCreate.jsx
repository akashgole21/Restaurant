import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBarManu from "./NavBarManu ";
import Form from 'react-bootstrap/Form';
// import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


class RestaurantCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      rating: null,
      address: null
    }
  }


  create() {
    fetch('http://localhost:3000/restaurant', {
      method: "Post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((result) => {
      result.json().then((resp) => {
        alert("Restaurant has been Created");

      })
    })
  }



  render() {
    return (
      <>
        <NavBarManu />
        <Container>
          <Row>
            <Col>
              <h1 style={{ margin: '40px 0px 20px' }}>Restaurant Create</h1>

                <Form className="form-style">
                  <Form.Group className="mb-3">
                    <Form.Control type="text"
                      onChange={(event) => { this.setState({ name: event.target.value }) }}
                      placeholder="Restaurant Name" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="text"
                      onChange={(event) => { this.setState({ email: event.target.value }) }}
                      placeholder="Restaurant Email" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="text"
                      onChange={(event) => { this.setState({ rating: event.target.value }) }}
                      placeholder="Restaurant Rating" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="text"
                      onChange={(event) => { this.setState({ address: event.target.value }) }}
                      placeholder="Restaurant Address" required />
                  </Form.Group>

                  <Button onClick={() => { this.create() }}>Add Restaurant</Button>
                </Form>

            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default (RestaurantCreate);
