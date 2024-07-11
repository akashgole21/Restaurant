import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavBarManu from "./NavBarManu ";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const RestaurantUpdate = () => {
  const [restaurantData, setRestaurantData] = useState({
    name: "",
    email: "",
    address: "",
    rating: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://akashgole21.github.io/restaurant/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRestaurantData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (event) => {
    setRestaurantData({
      ...restaurantData,
      [event.target.name]: event.target.value,
    });
  };

  const updateRestaurant = async () => {
    try {
      const response = await fetch(`https://akashgole21.github.io/restaurant/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(restaurantData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedRestaurant = await response.json();
      console.log("Restaurant updated successfully:", updatedRestaurant);
      alert("Restaurant updated successfully!"); // Informative message
    } catch (error) {
      console.error("Error updating restaurant:", error);
      alert("An error occurred while updating the restaurant. Please try again."); // User-friendly error message
    }
  };

  return (
    <>
      <NavBarManu />
      <Container>
        <Row>
          <Col>
            <h1 style={{margin:'40px 0px 20px'}}>Update</h1>

            <Form className="form-style">
                  <Form.Group className="mb-3">
                    <Form.Control
                      onChange={handleInputChange}
                      name="name"
                      placeholder="Restaurant Name"
                      value={restaurantData.name}
                      />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                       onChange={handleInputChange}
                       name="email"
                       placeholder="Restaurant Email"
                       value={restaurantData.email} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      onChange={handleInputChange}
                      name="rating"
                      placeholder="Restaurant Rating"
                      value={restaurantData.rating} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                       onChange={handleInputChange}
                       name="address"
                       placeholder="Restaurant Address"
                       value={restaurantData.address} />
                  </Form.Group>

                  <Button onClick={updateRestaurant}>Add Restaurant</Button>
                </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RestaurantUpdate;
